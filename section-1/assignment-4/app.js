const app = Vue.createApp({
  data() {
    return {
      inputText: '',
      isVisible: true,
      bgColor: '',
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
