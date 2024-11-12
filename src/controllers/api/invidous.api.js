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

async function callfetchInvidiousInstances() {
  const instanceList = await fetchInvidiousInstances();
  return instanceList;
}
async function getCurrentInstance() {
  const instanceList = await callfetchInvidiousInstances();
  return instanceList[1];
}

export async function invidiousAPICall({ resource, id = "", params = {} }) {
  let p = new URLSearchParams(params).toString();
  let ins = localStorage.getItem("workingInvIns");    
  if (!ins) {
      ins = await getCurrentInstance();
  } 
  const requestUrl = ins + "/api/v1/" + resource + "/" + id + "?" + p;
  let response, result = null;
    try{
      response = await fetch(requestUrl);
      if(response)
        { 
          result = await response.json(); 
        }
      return result;
    }
    catch(e){
      console.log("error in api", e);
      localStorage.removeItem("workingInvIns");
      return null;
    }
    finally{
      if(result !== null && !localStorage.getItem("workingInvIns"))
        localStorage.setItem("workingInvIns", ins);
    }
}
