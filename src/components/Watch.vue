<script>
import { callApi } from "../controllers/api/index.api.js";
import ErrorBox from "./ErrorBox.vue";
export default {
  data() {
    return {
      result: "",
      call: new callApi(),
      url: "",
      isLoading: true,
      error: { msg: null, code: null }
    };
  },
  components: { ErrorBox },
  async mounted() {
    this.result = await this.call.getById(this.$route.params.id);
    if (this.result.error) {
      this.error.msg = "fetching video was unseccessful. this video might be deleted on youtube.";
      this.error.code = 404;
      return this.error;
    }
    console.log({l:this.result.description.length});
    this.url = "https://www.youtube.com/embed/" + (await this.result.videoId);
    return this.result
  },
  methods: {
    iFrameError() {
      this.error = {
        msg: "something went wrong. could not fetch this video.",
        code: 404
      }
    },
    iFrameLoad() {
      setTimeout(() => this.isLoading = false, 2000)
    }
  }
};
</script>

<template>
  <error-box v-if="error.msg" :ErrorProp="error" @on-error-box-close="() => error = { msg: null, code: null }" />
  <div v-else>
    <div v-if="isLoading" class="video-container container-skeleton"></div>
    <div v-show="!isLoading" class="video-container">
      <div class="yt-frame">
        <iframe @error="iFrameError" @load="iFrameLoad" :src="url" :title="result.title" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <div class="info">
        <div class="title">{{ result.title }}</div>
        <div class="description">{{ result.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  display: block;
  margin: auto;
  width: 100%;
  height: auto;
}

.video-container.container-skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: #181818;
  }

  100% {
    background-color: var(--darkgrey);
  }
}

.yt-frame {
  display: block;
  width: 100%;
  height: 60vh;
}

.yt-frame iframe {
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
}
.info {
    display: block;
    margin: 1rem auto;
    font-family: "Roboto","Arial",sans-serif;
    width: 90%;
    color: var(--white);
}
.info .title{    
  font-size: 2em;
}
.info .description{
    font-size: 1.1em;
    margin-top: 1rem;
    background: rgba(255,255,255,0.1);
    padding: 1rem;
    border-radius: 10px;
}

</style>
