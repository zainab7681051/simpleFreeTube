<script>
import { callApi } from "../controllers/api/index.api.js";
export default {
  data() {
    return {
      result: "",
      call: new callApi(),
      url: "",
    };
  },
  async mounted() {
    try {
      const params = this.$route.params;
      this.result = await this.call.getById(params.id);
      this.url = "https://www.youtube.com/embed/" + (await this.result.videoId);
    } catch (e) { }
  },
};

</script>

<template>
  <div class="video-container">
    <div class="yt-frame">
      <iframe :src="url" :title="result.title" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="info">
      <h2>{{ result.title }}</h2>
      <h3>{{ result.description }}</h3>
    </div>
  </div>
</template>

<style>
.video-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: auto;
}

.info h2 {
  text-align: center;
  color: var(--white);
}

.info h3 {
  margin-top: 1.5rem;
  font-size: 0.9em;
  text-align: justify;
  height: auto;
}

.yt-frame iframe {
  height: 480px;
  width: 100%;
}
</style>
