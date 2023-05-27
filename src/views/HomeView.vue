<template>
  <main>
    <div class="search-bar">
      <input
        class="search-input"
        type="text"
        v-model="query"
        placeholder="Search for a video..."
      />
      <button @click="search">search</button>
    </div>

    <h1>POPULAR</h1>
    <popular-vids></popular-vids>
  </main>
</template>

<script>
import popularVids from "../components/PopularVids.vue";
export default {
  data() {
    return { query: "" };
  },
  components: {
    popularVids,
  },
  methods: {
    search() {
      window.open(`search/${this.query}`, "_self");
    },
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
main .search-bar {
  align-self: center;
  display: flex;
}
main .search-bar .search-input {
  background: transparent;
  color: var(--white);
  width: 10rem;
  line-height: 18px;
  border-width: 0 0 2px 0;
  border-style: none none solid none;
  padding: 4px 8px 4px 8px;
  outline: 0;
  transition: all 0.3s ease;
}

main .search-bar .search-input:focus {
  width: 12rem;
  border-bottom-style: 4px;
  border-bottom-color: #d44545;
}

main .search-bar button {
  background: #e48989;
  border-radius: 15px;
  border: 4px;
}
main .search-bar button:hover {
  background: #d44545;
}

@media (min-width: 720px) {
  main .search-bar button {
    padding: 0.5rem;
  }
  main .search-bar .search-input {
    width: 18rem;
  }
  main .search-bar .search-input:focus {
    width: 20rem;
  }
}
</style>
