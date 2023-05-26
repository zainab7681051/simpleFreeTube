<template>
  <div class="video-container">
    <h2>{{ result.title }}</h2>
    <h3>{{ result.description }}</h3>
  </div>
</template>

<script>
import { callApi } from "../controllers/api/index.api.js";
export default {
  data() {
    return {
      result: "",
      call: new callApi(),
    };
  },
  async mounted() {
    const params = this.$route.params;
    this.result = await this.call.getById(params.id);
  },
};
</script>
<style>
.video-container {
  height: auto;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.video-container h2 {
  text-align: center;
  color: var(--white);
}

.video-container h3 {
  margin-top: 1.5rem;
  font-size: 0.9em;
  text-align: justify;
  height: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.video-container h3:hover {
  height: auto;
  white-space: unset;
  overflow: visible;
  text-overflow: unset;
}
</style>
