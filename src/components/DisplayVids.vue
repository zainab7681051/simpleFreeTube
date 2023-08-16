<template>
  <ul v-if="defined">
    <li v-for="d in VidData" :key="d.videoId">
      <RouterLink :to="{
        path: `/watch/${d.videoId}`,
      }" class="router-link">
        <img class="img" :src="d.videoThumbnails[0].url" :title="d.title" />
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
<script src="../scripts/DisplayVidsScript.js"></script>
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
}</style>
