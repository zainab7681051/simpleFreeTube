<template>
  <loading-skeleton v-if="isLoading"></loading-skeleton>
  <display-vids :VidData="ResultData"></display-vids>
</template>
<script src="../scripts/PopularVidsScript.js"></script>
