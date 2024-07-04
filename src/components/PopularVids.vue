<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
import LoadingSkeleton from "../components/LoadingSkeleton.vue";
import ErrorBox from "./ErrorBox.vue";
export default {
  data() {
    return {
      ResultData: [],
      call: new callApi(),
      now: new Date(),
      isLoading: true,
      imgLoadedCount: 0,
      error: { msg: null, code: null }
    };
  },
  components: { DisplayVids, LoadingSkeleton, ErrorBox },
  async mounted() {
    this.ResultData = await this.getFromApi();
  },
  methods: {
    async getFromApi() {
      const result = await this.call.getByPop();
      if (result.error !== undefined || result.length < 1) {
        this.error.msg = "Fetching popular youtube videos was unsuccesfull. Please try again.";
        this.error.code = 500;
        return this.error;
      }
      return result;
    },
    onImageLoad() {
      ++this.imgLoadedCount;
      if (this.imgLoadedCount >= this.ResultData.length) {
        this.isLoading = false;
      }
    }
  }
};
</script>

<template>
  <error-box v-if="error.msg" :ErrorProp="error" @on-error-box-close="() => error = { msg: null, code: null }" />
  <div v-else>
    <loading-skeleton v-if="isLoading" />
    <display-vids v-show="!isLoading" @img-loaded="onImageLoad" :VidData="ResultData" />
  </div>
</template>
