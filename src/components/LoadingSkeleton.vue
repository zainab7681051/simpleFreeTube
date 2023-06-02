<template>
	<ul class="skeleton">
    <li>
      <div></div>
      <p></p>
    </li>
    <li>
      <div></div>
      <p></p>
    </li>
    <li>
      <div></div>
      <p></p>
    </li>
    <li>
      <div></div>
      <p></p>
    </li>
    <li>
      <div></div>
      <p></p>
    </li>
    <li>
      <div></div>
      <p></p>
    </li>
  </ul>
</template>

<style scoped>
.skeleton{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skeleton li{
  margin: 2.5rem 1rem 2rem 1rem;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.skeleton li div{
  width: 100%;
  height: 200px;
} 

.skeleton li {
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
  ul li {
    width: 300px;
    height: 200px;
  }

.skeleton li{  
    width: 300px;
    height: 200px;
  }
}

</style>