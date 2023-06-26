<template>
  <div class="trend">
    <h1>Trending</h1>
    <loading-skeleton v-if="isLoading"></loading-skeleton>
    <display-vids :VidData="ResultData"></display-vids>
  </div>
</template>
<script src="../scripts/TrendingViewScript.js"></script>

<style scoped>
.trend {
  min-height: 90vh;
  min-width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
}
.trend h1 {
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-self: center;
}
</style>
