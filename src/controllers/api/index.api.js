export class callApi {
  async getByPop(k) {
    return await invidiousAPICall({
      resource: "videos",
      id: "aqz-KE-bpKQ",
      params: {
        fields: ["videoId", "title", "description"],
      },
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
