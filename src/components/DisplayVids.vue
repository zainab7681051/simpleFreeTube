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
  <ul>
    <li v-for="(d, index) in VidData" :key="index">
      <RouterLink :to="{
        path: `/watch/${d.videoId}`
      }" class="router-link">
        <img class="img" :src="defaultThumbnailUrl(index)" :srcset="srcset(index)"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" :title="d.title"
          @load="$emit('imgLoaded', index)" />

        <p class="title">{{ d.title }}</p>
        <p class="publishedText">{{ d.publishedText }}</p>

        <p class="duration">{{ vidDuration(d.lengthSeconds) }}</p>
        <p class="authorName">{{ d.author }}</p>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: baseline;
}

ul li {
  margin: 2rem 1rem 2rem 0rem;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ul li:hover {
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

.img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.duration {
  color: var(--orange);
  font-size: 0.8em;
}

.authorName {
  color: var(--lightgrey);
  font-size: 0.7em;
}

.err h2 {
  padding: 2rem;
}

@media (min-width: 600px) {
  ul li {
    width: 52%;
  }

  img {
    width: 55%;
  }
}

@media (min-width: 720px) {
  ul li {
    width: 42%;
  }

  img {
    width: 44%;
  }
}

@media (min-width: 1200px) {
  ul li {
    width: 32%;
  }

  img {
    width: 33%;
  }
}

/* @media (min-width: 720px) {
  ul li {
    width: 300px;
    height: 200px;
  }
} */
</style>
