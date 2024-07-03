const fetchInvidiousInstances = async () => {
  const requestUrl = "https://api.invidious.io/instances.json";

  let instances = [];
  const response = await fetch(requestUrl);
  const json = await response.json();
  instances = json
    .filter((instance) => {
      return !(
        instance[0].includes(".onion") ||
        instance[0].includes(".i2p") ||
        !instance[1].api
      );
    })
    .map((instance) => {
      return instance[1].uri.replace(/\/$/, "");
    });
  return instances;
};

async function callfetchInvidiousInstances(now) {
  const instanceList = await fetchInvidiousInstances();
  return instanceList;
}
async function getCurrentInstance() {
  let now = new Date();
  const instanceList = await callfetchInvidiousInstances(now);
  return instanceList[0];
}

export async function invidiousAPICall({ resource, id = "", params = {} }) {
  let p = new URLSearchParams(params).toString();
  const requestUrl =
    (await getCurrentInstance()) + "/api/v1/" + resource + "/" + id + "?" + p;
  const response = await fetch(requestUrl);
  const result = await response.json();
  return result;
}
