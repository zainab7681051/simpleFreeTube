<template>
  <div class="trend">
    <h1>Trending</h1>

      <loading-skeleton v-if="isLoading"></loading-skeleton>
      <display-vids v-if="!isLoading" :VidData="ResultData"></display-vids>
  </div>
</template>
<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
import LoadingSkeleton from "../components/LoadingSkeleton.vue"
export default {
  data() {
    return {
      ResultData: "",
      call: new callApi(),
      now: new Date(),
      isLoading:true,
      timeoutN:0
    };
  },
  components: { DisplayVids, LoadingSkeleton },
  async mounted() {
    try {
      if (localStorage.trending_result) {
        this.timeoutN=2000;
        const local = await JSON.parse(localStorage.trending_result);
        if (typeof local === "undefined" || local.result.length <= 0)
          throw new Error();
        this.ResultData = local.result;
        if (this.now.getTime() > local.expire) {
          delete localStorage.trending_result;
        }
      } else {
        this.timeoutN=5000;
        const result = await this.call.getByTrend();
        if (typeof result === "undefined") throw new Error();
        this.ResultData = result;
        localStorage.setItem(
          "trending_result",
          JSON.stringify({
            result: result,
            expire: this.now.getTime() + 1000 * 600, //10 minutes
          })
        );
      }
    } catch (e) {
      delete localStorage.trending_result;
      console.error("TrendingView.vue error", e);
    } finally {
      setTimeout(()=>{
        this.isLoading=!this.isLoading
      }, this.timeoutN)

    }
  },
  methods: {},
};
</script>

<style scoped>
.trend {
  min-height: 90vh;
  min-width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
}
.trend h1 {
  margin-top: 2rem;
  align-self: center;
}
</style>
