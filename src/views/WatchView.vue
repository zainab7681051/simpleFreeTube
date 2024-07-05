<template>
  <main>
    <WatchVid></WatchVid>
  </main>
</template>

<script setup>
import WatchVid from "../components/Watch.vue";
</script>

<style scoped>
main {
  min-height: 90vh;
  min-width: 80vw;
}

@media (min-width: 760) {
  main {
    display: flex;
  }
}
</style>
