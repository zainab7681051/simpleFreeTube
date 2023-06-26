import { callApi } from "../controllers/api/index.api.js";
export default {
  data() {
    return {
      result: "",
      call: new callApi(),
      url: "",
    };
  },
  async mounted() {
    try {
      const params = this.$route.params;
      this.result = await this.call.getById(params.id);
      this.url = "https://www.youtube.com/embed/" + (await this.result.videoId);
    } catch (e) {}
  },
};
