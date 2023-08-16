<template>
  <main>
    <div class="search-bar">
      <input class="search-input" type="text" v-model="query" placeholder="Search for a video..." @keyup.enter="search" />
      <button @click="search">search</button>
    </div>

    <h1>POPULAR</h1>
    <popular-vids></popular-vids>
  </main>
</template>

<script src="../scripts/HomeScrips.js"></script>

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

main .search-bar button {
  background: #e48989;
  border-radius: 15px;
  border: 4px;
  font-size: 15px;
  cursor: pointer;
}

main .search-bar button:hover {
  background: #d44545;
}

@media (min-width: 720px) {
  main .search-bar button {
    padding: 0.5rem;
    font-size: 18px;
  }

  main .search-bar .search-input {
    width: 18rem;
    font-size: 24px;
  }

  main .search-bar .search-input:focus {
    width: 30rem;
  }
}
</style>
