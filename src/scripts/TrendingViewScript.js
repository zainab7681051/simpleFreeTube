import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
import LoadingSkeleton from "../components/LoadingSkeleton.vue";
export default {
  data() {
    return {
      ResultData: "",
      call: new callApi(),
      now: new Date(),
      isLoading: true,
      timeoutN: 0,
    };
  },
  components: { DisplayVids, LoadingSkeleton },
  async mounted() {
    try {
      if (localStorage.trending_result) {
        this.timeoutN = 2000;
        const local = await JSON.parse(localStorage.trending_result);
        if (this.now.getTime() > local.expire) {
          delete localStorage.trending_result;
          this.timeoutN+=4000;
          this.ResultData=await this.getFromApi();
        } else {
          if (typeof local === "undefined" || local.result.length <= 0) {
            throw new Error();
          }
          this.ResultData = local.result;
        }
      } else {
        this.timeoutN = 6000;
        this.ResultData=await this.getFromApi();
      }
    } catch (e) {
      delete localStorage.trending_result;
      console.error("TrendingView.vue error", e);
    } finally {
      setTimeout(() => {
        this.isLoading = !this.isLoading;
      }, this.timeoutN);
    }
  },
  methods:{
    async getFromApi(){
      const result=await this.call.getByTrend();
        if (typeof result === "undefined") throw new Error();
        localStorage.setItem(
          "trending_result",
          JSON.stringify({
            result: result,
            expire: this.now.getTime() + 1000  * 600, //10 minutes
          })
        );
        return result;
    }
  }
};
