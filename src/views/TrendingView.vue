<template>
  <div class="trend">
    <h1>Trending</h1>
    <display-vids :VidData="ResultData"></display-vids>
  </div>
</template>
<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
export default {
  data() {
    return {
      ResultData: "",
      call: new callApi(),
      now: new Date(),
    };
  },
  components: { DisplayVids },
  async mounted() {
    try {
      if (localStorage.trending_result) {
        const local = await JSON.parse(localStorage.trending_result);
        if (typeof local === "undefined") throw new Error();
        this.ResultData = local.result;
        if (this.now.getTime() > local.expire) {
          delete localStorage.trending_result;
        }
      } else {
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
