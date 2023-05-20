<template>
  <div class="not-found">
    <h1>404, PAGE NOT FOUND :(</h1>
    <h2>let's go back <RouterLink to="/">Home</RouterLink></h2>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
