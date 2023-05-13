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
  <RouterView />
</template>

<style scoped>
.container {
  padding-left: var(--containerXPadding);
  padding-right: var(--containerXPadding);
}

header {
  position: fixed;
  z-index: 50;
  width: 100%;
  top: 0;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey);
}

.logo {
  width: 4rem;
}

.logo h1 {
  color: var(--white);
}

.toggle {
  width: 2rem;
  height: 1.5rem;
  cursor: pointer;
  position: relative;
}

.toggle span {
  width: 100%;
  display: block;
  border-bottom: 2px solid var(--white);
  position: absolute;
  transition: top 0.3s ease, transform 0.3s ease;
}

.toggle span:first-child {
  top: 0.4rem;
}

.toggle span:last-child {
  top: 0.9rem;
}

.toggle.active span {
  top: 0.75rem;
}

.toggle.active span:first-child {
  transform: rotate(45deg);
}

.toggle.active span:last-child {
  transform: rotate(-45deg);
}

.menu {
  position: fixed;
  top: 5rem;
  right: -15rem;
  width: 15rem;
  background: var(--darkgrey);
  opacity: 0;
  padding: 1rem;
  transition: right 0.3s ease, opacity 0.3s ease;
}

.menu ul {
  list-style: none;
}

.menu ul li {
  text-transform: uppercase;
  font-weight: 300;
}

.menu ul li > * {
  color: var(--white);
  display: block;
  padding: 0.5rem;
  letter-spacing: 0.1rem;
  transition: color 0.3s ease;
}

.menu ul li > *:hover {
  color: var(--blue);
}

.menu ul li + li {
  border-top: 1px solid var(--grey);
}

.menu ul li > *.active {
  color: var(--orange);
  pointer-events: none;
}

.menu.active {
  right: var(--containerXPadding);
  opacity: 1;
}

@media (min-width: 1024px) {
  .toggle {
    display: none;
  }
  .menu {
    background: transparent;
    position: static;
    top: auto;
    right: auto;
    opacity: 1;
    width: auto;
    padding: 0;
  }
  .menu ul {
    display: flex;
    gap: 3rem;
  }
  .menu ul li > * {
    color: var(--white);
    padding: 0;
  }
  .menu ul li + li {
    border-top: none;
  }
}

a {
  text-decoration: none;
}
</style>
