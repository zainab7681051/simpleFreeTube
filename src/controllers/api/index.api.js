import { invidiousAPICall } from "./invidous.api.js";
export class callApi {
  async getByPop(k) {
    return await invidiousAPICall({
      resource: k.resource, //"popular",
      params: k.params /*{
        fields: ["videoId", "title", "description"],
      },*/,
    });
  }

  async getByTrend(k) {
    return await invidiousAPICall({
      resource: "videos",
      id: "aqz-KE-bpKQ",
      params: {
        fields: ["videoId", "title", "description"],
      },
    });
  }

  async getById(k) {
    return await invidiousAPICall({
      resource: "videos",
      id: "aqz-KE-bpKQ",
      params: {
        fields: ["videoId", "title", "description"],
      },
    });
  }

  async getByQuery(k) {
    return await invidiousAPICall({
      resource: "videos",
      id: "aqz-KE-bpKQ",
      params: {
        fields: ["videoId", "title", "description"],
      },
    });
  }
}
