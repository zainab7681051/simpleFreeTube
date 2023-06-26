<template>
  <loading-skeleton v-if="isLoading"></loading-skeleton>
  <display-vids :VidData="ResultData"></display-vids>
  <div class="searchView">
    <h3 class="error"></h3>
  </div>
</template>
<script src="../scripts/SearchvidsScript"></script>
<style>
.searchView {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 2rem;
}
</style>
