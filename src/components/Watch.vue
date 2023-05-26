<template>
  <h1>{{ vidId }}</h1>
</template>

<script>
export default {
  data() {
    return {
      vidId: "",
    };
  },
  mounted() {
    this.vidId = this.$route.params;
  },
};
</script>
<style></style>
