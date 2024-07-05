<script>
import { RouterLink } from "vue-router";

export default {
  props: { VidData: Array },
  components: { RouterLink },

  methods: {
    srcset(index) {
      let vid = this.VidData[index]
      return vid.videoThumbnails.map(thumbnail => `${thumbnail.url} ${thumbnail.width}w`).join(', ');
    },

    defaultThumbnailUrl(index) {
      let vid = this.VidData[index]
      return vid.videoThumbnails[0]?.url || '';
    },

    vidDuration(durationInSec) {
      let result;
      const totalSeconds = durationInSec;

      const minutes = Math.floor(totalSeconds / 60);

      const seconds = totalSeconds % 60;

      function padTo2Digits(num) {
        return num.toString().padStart(2, "0");
      }

      result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
      return result;
    },
  },
};

</script>

<template>
  <div class="vids-container">
    <div class="vid" v-for="(d, index) in VidData" :key="index">
      <RouterLink :to="{
        path: `/watch/${d.videoId}`
      }" class="router-link">
        <img class="vid-thumbnail" :src="defaultThumbnailUrl(index)" :srcset="srcset(index)"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" :title="d.title"
          @load="$emit('imgLoaded', index)" />

        <p class="title">{{ d.title }}</p>
        <p class="publishedText">{{ d.publishedText }}</p>

        <p class="duration">{{ vidDuration(d.lengthSeconds) }}</p>
        <p class="authorName">{{ d.author }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.vids-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: baseline;
}

.vids-container .vid {
  margin: 2rem 1rem 2rem 0rem;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vids-container .vid:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
}

.title {
  font-size: 0.9em;
  color: var(--white);
}

.publishedText {
  font-size: 0.7em;
  color: var(--white);
}

.vid-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.duration {
  color: var(--orange);
  font-size: 0.8em;
}

.authorName {
  color: var(--lightgrey);
  font-size: 0.7em;
}

@media (min-width: 600px) {
  .vids-container .vid {
    width: 55%;
  }
}

@media (min-width: 720px) {
  .vids-container .vid {
    width: 48%;
  }
}

@media (min-width: 1200px) {
  .vids-container .vid {
    width: 32%;
  }
}
</style>
