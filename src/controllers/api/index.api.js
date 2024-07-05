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
        type: "video",
        fields: [
          "videoThumbnails",
          "videoId",
          "title",
          "description",
          "author",
          "authorThumbnails",
          'recommendedVideos'
        ],
        pretty: 1,
      },
    });
  }

  async getByQuery(q, sortBy = "relevence") {
    return await invidiousAPICall({
      resource: "search",
      params: {
        type: "video",
        q: q,
        sort_by: sortBy,
        pretty: 1,
      },
    });
  }
}
