<template>
  <main>
    <h1>WATCH VIDEO</h1>
    <WatchVid></WatchVid>
  </main>
</template>

<script setup>
import WatchVid from "../components/Watch.vue";
</script>

<style scoped>
main {
  min-height: 90vh;
  min-width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
}

main h1 {
  margin-top: 2rem;
  align-self: center;
}
</style>
