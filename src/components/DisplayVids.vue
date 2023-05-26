<template>
  <ul>
    <li v-for="d in VidData" :key="d.videoId">
      <RouterLink
        :to="{
          path: `/watch/${d.videoId}`,
        }"
      >
        <img class="img" :src="d.videoThumbnails[0].url" />
        <p class="title">{{ d.title }}</p>
      </RouterLink>
    </li>
  </ul>
  <slot>there is nothing to display</slot>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: { VidData: [] },
  components: { RouterLink },
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
  margin: 2rem;
  text-align: center;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
}
ul li:hover {
  cursor: pointer;
}
a {
  text-decoration: none;
}
.title {
  font-size: 1.1em;
  color: var(--white);
}
.img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
