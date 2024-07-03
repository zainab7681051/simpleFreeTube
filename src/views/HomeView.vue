<script setup>
import popularVids from "../components/PopularVids.vue";
import SearchBar from "../components/SearchBar.vue"
</script>

<template>
  <main>
    <search-bar/>
    <h1>POPULAR</h1>
    <popular-vids></popular-vids>
  </main>
</template>


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
  margin-bottom: 2rem;
  align-self: center;
}
</style>
