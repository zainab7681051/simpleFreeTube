<script setup></script>

<template>
  <main>
    <div class="search-bar">
      <input class="search-input" type="text" placeholder="Search" />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <h1>POPULAR</h1>
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
  align-self: center;
  font-size: 2rem;
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
  width: 15rem;
  border-bottom-style: 4px;
  border-bottom-color: #e75d5d;
}
</style>
