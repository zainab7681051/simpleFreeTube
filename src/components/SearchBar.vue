<script>
export default {
  data() {
    return { query: "" };
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
    <div class="search-bar">
      <input class="search-input" type="text" v-model="query" placeholder="Search for a video..."
        @keyup.enter="search" />
      <button class="custom-button" @click="search">search</button>
    </div>
</template>

<style scoped>

.search-bar {
  align-self: center;
  display: flex;
}

.search-bar .search-input {
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

.search-bar .search-input:focus {
  width: 18rem;
  border-bottom-style: 4px;
  border-bottom-color: #d44545;
}

.custom-button {
  margin-left: 1rem;
}

@media (min-width: 720px) {
.search-bar .search-input {
    width: 18rem;
    font-size: 24px;
  }

.search-bar .search-input:focus {
    width: 30rem;
  }
}
</style>