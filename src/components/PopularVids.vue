<template>
  <loading-skeleton v-if="isLoading"></loading-skeleton>
  <display-vids v-if="!isLoading" :VidData="ResultData"></display-vids>
</template>
<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "./DisplayVids.vue";
import LoadingSkeleton from "./LoadingSkeleton.vue"
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
      if (localStorage.popular_result) {
        this.timeoutN=2000;
        const local = await JSON.parse(localStorage.popular_result);
        if (typeof local.result === "undefined" || local.result.length <= 0)
          throw new Error();
        this.ResultData = local.result;
        if (this.now.getTime() > local.expire) {
          delete localStorage.popular_result;
        }
      } else {
        this.timeoutN=5000;
        const result = await this.call.getByPop();
        if (typeof result === "undefined") throw new Error();
        this.ResultData = result;
        localStorage.setItem(
          "popular_result",
          JSON.stringify({
            result: result,
            expire: this.now.getTime() + 1000 * 600, //10 minutes
          })
        );
      }
    } catch (e) {
      delete localStorage.popular_result;
      console.error("PopularVids.vue error", e);
    } finally {
      setTimeout(()=>{
        this.isLoading=!this.isLoading
      }, this.timeoutN)

    }
  },
  methods: {},
};
</script>
