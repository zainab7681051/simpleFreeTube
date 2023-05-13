<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  mounted() {
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
  },
};
</script>

<template>
  <header class="container">
    <span class="logo">
      <RouterLink to="/"><h1>SimpleFreeTube</h1></RouterLink>
    </span>
    <span class="toggle">
      <span></span>
      <span></span>
    </span>
    <div class="menu">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/trending">Trending</RouterLink></li>
      </ul>
    </div>
  </header>

  <div class="sections"><RouterView /></div>

  <footer>
    <a href="https://github.com/zainab7681051/simpleFreeTube" target="_blank">
      <i class="fa-brands fa-github"></i>
    </a>
    <p>{{ new Date().getFullYear() }}</p>
    <p>
      &copy<a href="https://zainab-portfolio.web.app" target="_blank">Zainab</a>
    </p>
  </footer>
</template>

<style scoped></style>
