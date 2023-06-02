<template>
 <ul v-if="defined">
    <li v-for="d in VidData" :key="d.videoId">
      <RouterLink
        :to="{
          path: `/watch/${d.videoId}`,
        }"
        class="router-link"
      >
        <img class="img" :src="d.videoThumbnails[0].url" />
        <p class="title">{{ d.title }}</p>

        <p class="duration">{{ vidDuration(d.lengthSeconds) }}</p>
        <p class="authorName">{{ d.author }}</p>
      </RouterLink>
    </li>
  </ul>
  
  <ul class="err" v-else>
    <h2>something went wrong</h2>
  </ul> 
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: { VidData: [] },
  components: { RouterLink },
  computed: {
    defined: function () {
      if (typeof this.VidData != "undefined") return true;
      else return false;
    },
  },
  methods: {
    vidDuration(durationInSec) {
      try {
        let result;
        const totalSeconds = durationInSec;

        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        function padTo2Digits(num) {
          return num.toString().padStart(2, "0");
        }

        result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
        return result;
      } catch (e) {
        console.error("DisplayVids error", e);
        
      }
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

ul li {
  margin: 2.5rem 1rem 2rem 1rem;
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
@media (min-width: 720px) {
  ul li {
    width: 300px;
    height: 200px;
  }
}
</style>
