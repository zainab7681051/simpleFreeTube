<template>
  <div class="about">
    <h1>about</h1>
    <h3>
      simpleFreeTube is a basic frontend project for watching youtube content
      without logging into youtube. with the help of the offcial
      <a href="https://invidious.io/">invidious API</a>, videos from youtube are
      fetched and displayed here with every information related to the them such
      as title, description, etc. <br />you can find the source code in my
      <a href="https://github.com/zainab7681051/simpleFreeTube">github repo</a>.
    </h3>
  </div>
</template>

<style scoped>
.about {
  color: var(--white);
  min-height: 90vh;
  padding: 2rem;
  text-transform: capitalize;
  display: block;
  margin: auto;
}

.about h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.about a {
  color: var(--blue);
}

@media (min-width: 1024px) {
  .about {
    padding: 5rem
  }
}
</style>
