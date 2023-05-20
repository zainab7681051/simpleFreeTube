<template>
  <div>
    <h1>hello</h1>
  </div>
</template>
<script>
import { callApi } from "../controllers/api/index.api.js";
export default {
  data() {
    return {};
  },
  async mounted() {
    const call = new callApi();
    const result = await call.getByPop();
    console.log(result);
  },
};
</script>
<style></style>
