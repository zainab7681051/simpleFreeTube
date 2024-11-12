<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
import LoadingSkeleton from "../components/LoadingSkeleton.vue";
import ErrorBox from "../components/ErrorBox.vue";
import SearchBar from "../components/SearchBar.vue"
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
  components: {
    DisplayVids,
    LoadingSkeleton,
    ErrorBox,
    SearchBar
  },
  async mounted() {
    this.ResultData = await this.getFromApi();
  },
  methods: {
    async getFromApi() {
      const result = await this.call.getByTrend();
      if (!result || result.error !== undefined || result.length < 1) {
        this.error.msg = "Fetching trending youtube videos was unsuccesfull. Please try again.";
        this.error.code = 500;
        return;
      }
      return result;
    },
    onImageLoad() {
      ++this.imgLoadedCount;
      if (this.imgLoadedCount >= this.ResultData.length/2) {
        this.isLoading = false;
      }
    }
  }
};
</script>

<template>
  <div class="trend">
    <search-bar />
    <h1>Trending</h1>
    <error-box v-if="error.msg" :ErrorProp="error" @on-error-box-close="() => error = { msg: null, code: null }" />
    <div v-else>
      <loading-skeleton v-if="isLoading"></loading-skeleton>
      <display-vids @img-loaded="onImageLoad" :VidData="ResultData"></display-vids>
    </div>
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
