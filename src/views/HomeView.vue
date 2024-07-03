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
      if (this.query.trim()) {
        return this.$router.push({ path: '/search', query: { q: this.query } });
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="search-bar">
      <input class="search-input" type="text" v-model="query" placeholder="Search for a video..."
        @keyup.enter="search" />
      <button class="custom-button" @sumbit="search">search</button>
    </div>

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

main .search-bar {
  align-self: center;
  display: flex;
}

main .search-bar .search-input {
  background: transparent;
  color: var(--white);
  width: 14rem;
  line-height: 18px;
  font-size: 18px;
  border-width: 0 0 2px 0;
  border-style: none none solid none;
  padding: 4px 8px 4px 8px;
  outline: 0;
  transition: all 0.3s ease;
}

main .search-bar .search-input:focus {
  width: 18rem;
  border-bottom-style: 4px;
  border-bottom-color: #d44545;
}

.custom-button {
  margin-left: 1rem;
}

@media (min-width: 720px) {
  main .search-bar .search-input {
    width: 18rem;
    font-size: 24px;
  }

  main .search-bar .search-input:focus {
    width: 30rem;
  }
}
</style>
