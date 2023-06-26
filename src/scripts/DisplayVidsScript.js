import { RouterLink } from "vue-router";

export default {
  props: { VidData: [] },
  components: { RouterLink },
  computed: {
    defined: function () {
      if (typeof this.VidData != "undefined") return true;
      else return false;
    },
  },
  methods: {
    vidDuration(durationInSec) {
      try {
        let result;
        const totalSeconds = durationInSec;

        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        function padTo2Digits(num) {
          return num.toString().padStart(2, "0");
        }

        result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
        return result;
      } catch (e) {
        console.error("DisplayVids error", e);
      }
    },
  },
};
