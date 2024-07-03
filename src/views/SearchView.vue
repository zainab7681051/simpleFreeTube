<template>
  <main>
    <h1>
      search results for:
      <span style="font-weight: 700">{{ this.$route.query.q }}</span>
    </h1>
    <search-vids :q="this.$route.query.q"></search-vids>
  </main>
</template>

<script>
import searchVids from "../components/Searchvids.vue";
export default {
  components: {
    searchVids,
  },
};
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
