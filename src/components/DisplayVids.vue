<template>
  <ul>
    <li v-for="d in VidData" :key="d.videoId">{{ d.title }}</li>
  </ul>
</template>
<script>
export default {
  props: { VidData: [] },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin-top: 50px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

ul li {
  margin: 10px;
  background-color: var(--dark-grey);
  color: var(--white);
  border-radius: 4px;
  border-style: solid;
  border-color: aliceblue;
  text-align: center;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
}

ul li:hover {
  cursor: pointer;
}
</style>
