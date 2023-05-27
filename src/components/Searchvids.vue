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
  props: { q: "" },
  components: { DisplayVids },
  async mounted() {
    try {
      const result = await this.call.getByQuery(this.q);
      if (typeof result === "undefined") throw new Error();
      this.ResultData = result;
    } catch (e) {
      delete localStorage.search_result;
      console.error("SearchVids.vue error", e);
    }
  },
};
</script>
<style></style>
