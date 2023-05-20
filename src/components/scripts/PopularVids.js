import { callApi } from "../../controllers/api/index.api.js";
export default {
  data() {
    return { call: new callApi(), now: new Date() };
  },
  async mounted() {
    try {
      if (localStorage.popular_result) {
        const local = await JSON.parse(localStorage.popular_result);
        if (typeof local === "undefined") throw new Error();
        if (this.now.getTime() > local.expire) {
          delete localStorage.popular_result;
        }
      } else {
        const result = await this.call.getByPop();
        if (typeof result === "undefined") throw new Error();
        // console.log(result);
        localStorage.setItem(
          "popular_result",
          JSON.stringify({
            result: result,
            expire: this.now.getTime() + 1000 * 600, //10 minutes
          })
        );
      }
    } catch (e) {
      delete localStorage.popular_result;
      console.error("PopularVids.vue error", e);
    }
  },
  methods: {},
};
