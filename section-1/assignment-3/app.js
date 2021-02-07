Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    message() {
      let text;
      if (this.count === 37) {
        return (text = 'Win! 37 achieved!');
      } else if (this.count < 37) {
        return (text = 'Not there yet');
      } else {
        return (text = 'Too much!');
      }
    },
  },
  watch: {
    message(text) {
      const that = this;
      setTimeout(() => {
        if (text != 'Win! 37 achieved!') {
          that.count = 0;
        }
      }, 5000);
    },
  },
  methods: {
    increment(num) {
      this.count += num;
    },
  },
}).mount('#assignment');
