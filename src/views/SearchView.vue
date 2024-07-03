<template>
  <main>
    <search-bar />
    <search-vids></search-vids>
  </main>
</template>

<script setup>
import SearchVids from "../components/Searchvids.vue";
import SearchBar from "../components/SearchBar.vue";
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
</style>
