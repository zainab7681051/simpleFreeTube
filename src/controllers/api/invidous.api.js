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
    console.error({
      fetchInvidiousInstances_error: err,
    });
  }
};

async function getCurrentInstance() {
  try {
    const now = new Date();
    if (!localStorage.workingInstance) {
      const instanceList = await fetchInvidiousInstances();
      const randomInst = Math.floor(Math.random() * instanceList.length);
      localStorage.setItem(
        "workingInstance",
        JSON.stringify({
          inst: instanceList[randomInst],
          expire: now.getTime() + 1000 * 720, //12 minutes
        })
      );
      return instanceList[randomInst];
    } else {
      let local = JSON.parse(localStorage.workingInstance);
      if (typeof local.inst === "undefined") throw new Error();
      if (now.getTime() > local.expire) {
        delete localStorage.workingInstance;
      }
      return local.inst;
    }
  } catch (e) {
    delete localStorage.workingInstance;
    console.error({
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
    if (r.error !== undefined || r.length < 1) {
      throw new Error(r.error);
    }
    return r;
  } catch (e) {
    delete localStorage.workingInstance;
    console.error("Invidious API error", e);
  }
}
