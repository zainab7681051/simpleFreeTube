<template>
  <display-vids :VidData="ResultData"></display-vids>
</template>
<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "./DisplayVids.vue";
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
      if (localStorage.popular_result) {
        const local = await JSON.parse(localStorage.popular_result);
        if (typeof local === "undefined") throw new Error();
        this.ResultData = local.result;
        if (this.now.getTime() > local.expire) {
          delete localStorage.popular_result;
        }
      } else {
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
    }
  },
  methods: {},
};
</script>
<style></style>
