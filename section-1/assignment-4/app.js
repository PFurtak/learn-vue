const app = Vue.createApp({
  data() {
    return {
      inputText: '',
      isVisible: true,
      bgColor: '',
    };
  },
  methods: {
    updateClass(e) {
      this.inputText = e.target.value;
      console.log(this.inputText);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    updateColor(e) {
      this.bgColor = e.target.value;
    },
  },
});

app.mount('#assignment');
