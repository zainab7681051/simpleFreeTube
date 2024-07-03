<script>
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
      error: null
    };
  },
  props: { q: "" },
  components: { DisplayVids, LoadingSkeleton },
  async mounted() {
    try {
      const result = await this.call.getByQuery(this.q);
      if (typeof result === "undefined") throw new Error();
      this.ResultData = result;
    } catch (e) {
      document.querySelector(
        ".error"
      ).innerHTML = `nothing was found for <span style="font-weight:800">"${this.q}"</span>`;
    }
    /* 
    if (result.error !== undefined || result.length < 1) {
        this.error.msg = "Fetching popular youtube videos was unsuccesfull. Please try again.";
        this.error.code = 500;
        return;
      }
    */
  },
  methods: {
    onImageLoad(index) {
      if (index >= 6) {
        this.isLoading = false;
      }
    }
  }
};
</script>

<template>
  <loading-skeleton v-if="isLoading"></loading-skeleton>
  <display-vids v-show="!isLoading" @img-loaded="onImageLoad" :VidData="ResultData"></display-vids>
  <div class="searchView">
    <h3 class="error"></h3>
  </div>
</template>
<style>
.searchView {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 2rem;
}
</style>
