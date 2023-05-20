const fetchInvidiousInstances = async () => {
  const requestUrl = "https://api.invidious.io/instances.json";

  let instances = [];
  try {
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
  } catch (err) {
    console.log({
      fetchInvidiousInstances_error: err,
    });
  }
  // If the invidious instance fetch isn't returning anything
  if (instances.length === 0) {
    //TO DO
  }
};

async function getCurrentInstance() {
  try {
    const instanceList = await fetchInvidiousInstances();
    const randomInst = Math.floor(Math.random() * instanceList.length);
    return instanceList[randomInst];
  } catch (e) {
    console.log({
      getCurrentInstance_error: e,
    });
  }
}

export async function invidiousAPICall({ resource, id = "", params = {} }) {
  try {
    let p = new URLSearchParams(params).toString();
    const requestUrl =
      (await getCurrentInstance()) + "/api/v1/" + resource + "/" + id + "?" + p;
    const response = await fetch(requestUrl);
    const r = await response.json();
    // console.log(r);
    if (r.error !== undefined) {
      throw new Error(json.error);
    }
    return r;
  } catch (e) {
    console.error("Invidious API error", e);
  }
}
