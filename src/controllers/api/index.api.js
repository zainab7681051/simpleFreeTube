import { invidiousAPICall } from "./invidous.api.js";
export class callApi {
  async getByPop() {
    return await invidiousAPICall({
      resource: "popular",
      params: {
        type: "video",
        pretty: 1,
      },
    });
  }

  async getByTrend() {
    return await invidiousAPICall({
      resource: "trending",
      params: { type: "video", pretty: 1 },
    });
  }

  async getById(id) {
    return await invidiousAPICall({
      resource: "videos",
      id: id,
      params: {
        fields: ["videoThumbnails,videoId", "title", "description"],
        pretty: 1,
      },
    });
  }

  async getByQuery(id) {
    return await invidiousAPICall({
      resource: "videos",
      id: id,
      params: {
        fields: ["videoId", "title", "description"],
        pretty: 1,
      },
    });
  }
}
