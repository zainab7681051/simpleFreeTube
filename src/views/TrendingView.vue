<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
import LoadingSkeleton from "../components/LoadingSkeleton.vue";
import ErrorBox from "../components/ErrorBox.vue";
export default {
  data() {
    return {
      ResultData: [],
      call: new callApi(),
      now: new Date(),
      isLoading: true,
      error: null
    };
  },
  components: { DisplayVids, LoadingSkeleton, ErrorBox },
  async mounted() {
    this.ResultData = await this.getFromApi();
  },
  methods: {
    async getFromApi() {
      const result = await this.call.getByTrend();
      if (result.error !== undefined || result.length < 1) {
        this.error.msg = "Fetching trending youtube videos was unsuccesfull. Please try again.";
        this.error.code = 500;
        return;
      }
      return result;
    },
    onImageLoad(index) {
      if (index >= 15) {
        this.isLoading = false;
      }
    }
  }
};
</script>

<template>
  <div class="trend">
    <h1>Trending</h1>
    <div v-if="!error">
      <loading-skeleton v-if="isLoading"></loading-skeleton>
      <display-vids @img-loaded="onImageLoad" :VidData="ResultData"></display-vids>
    </div>
    <error-box v-else :ErrorProp="error" @on-error-box-close="() => error = null" />
  </div>

</template>

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
  margin-bottom: 2rem;
  align-self: center;
}
</style>
