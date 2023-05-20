import { invidiousAPICall } from "./invidous.api.js";
export class callApi {
  async getByPop() {
    return await invidiousAPICall({
      resource: "popular",
      params: { type: "video", pretty: 1 },
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
