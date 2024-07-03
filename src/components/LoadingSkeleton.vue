<template>
  <div class="skeleton">
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skeleton div {
  margin: 2.5rem 1rem 2rem 1rem;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skeleton div {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--vt-c-black);
  }

  100% {
    background-color: var(--darkgrey);
  }
}

@media (min-width: 720px) {
  .skeleton div {
    width: 300px;
    height: 200px;
  }
}
</style>