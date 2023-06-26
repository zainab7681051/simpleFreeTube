import popularVids from "../components/PopularVids.vue";
export default {
  data() {
    return { query: "" };
  },
  components: {
    popularVids,
  },
  methods: {
    search() {
      window.open(`search/${this.query}`, "_self");
    },
  },
};
