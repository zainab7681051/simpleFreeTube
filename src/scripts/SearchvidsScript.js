import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
import LoadingSkeleton from "../components/LoadingSkeleton.vue";
export default {
  data() {
    return {
      ResultData: "",
      call: new callApi(),
      timeoutN: 0,
      isLoading: true,
    };
  },
  props: { q: "" },
  components: { DisplayVids, LoadingSkeleton },
  async mounted() {
    try {
      this.timeoutN = 4000;
      this.errorText = "";
      const result = await this.call.getByQuery(this.q);
      if (typeof result === "undefined") throw new Error();
      this.ResultData = result;
    } catch (e) {
      console.error("SearchVids.vue error", e);
      document.querySelector(
        ".error"
      ).innerHTML = `nothing was found for <span style="font-weight:800">"${this.$route.params.q}"</span>`;
    } finally {
      setTimeout(() => {
        this.isLoading = !this.isLoading;
      }, this.timeoutN);
    }
  },
};
