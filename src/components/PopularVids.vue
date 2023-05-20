<template>
  <div>
    <h1>hello</h1>
  </div>
</template>
<script>
import { callApi } from "../controllers/api/index.api.js";
export default {
  data() {
    return { call: new callApi() };
  },
  async mounted() {
    try {
      if (localStorage.popular_result) {
        delete localStorage.popular_result;
        // const result = localStorage.popular_result;

        // console.log(result);
      } else {
        const result = await this.call.getByPop();
        console.log(result);
        localStorage.setItem("popular_result", JSON.stringify(result));
        console.log(localStorage.popular_result);
      }
    } catch (e) {
      console.error("PopularVids.vue error", e);
      delete localStorage.popular_result;
    }
  },
  methods: {},
};
</script>
<style></style>
