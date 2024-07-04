<script>
import { callApi } from "../controllers/api/index.api.js";
import DisplayVids from "../components/DisplayVids.vue";
import LoadingSkeleton from "../components/LoadingSkeleton.vue";
export default {
  data() {
    return {
      ResultData: new Array(),
      call: new callApi(),
      isLoading: true,
      imgLoadedCount: 0,
      error: false
    };
  },
  components: { DisplayVids, LoadingSkeleton },
  async mounted() {
    await this.searchByQuery(this.$route.query.q);
  },
  watch: {
    '$route.query.q': async function (newQuery) {
      await this.searchByQuery(newQuery);
    }
  },
  methods: {
    async searchByQuery() {
      this.isLoading = true;
      this.error = false;
      this.imgLoadedCount = 0;
      const result = await this.call.getByQuery(this.$route.query.q);
      if (result.length > 0) {
        return this.ResultData = result;
      }
      return this.error = true
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
  <div class="container" v-if="error">
    <h1 class="results-text no-results">found no results for &nbsp;"<span>{{ this.$route.query.q }}</span>"</h1>
  </div>
  <div class="container" v-else>
    <loading-skeleton v-if="isLoading"></loading-skeleton>
    <h1 class="results-text" v-show="!isLoading">search results for&nbsp;"<span>{{ this.$route.query.q }}</span>"</h1>
    <display-vids v-show="!isLoading" @img-loaded="onImageLoad" :VidData="ResultData"></display-vids>
  </div>
</template>
<style scoped>
.container {
  display: block;
  margin: 2rem auto;
}

.results-text {
  text-align: center;
  text-transform: capitalize;
  font-size: 2.5em;
}

.results-text span {
  text-transform: none;
  color: var(--orange);
  font-weight: 700
}
</style>