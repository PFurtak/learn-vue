Vue.createApp({
  data() {
    return {
      outputOne: '',
      outputTwo: '',
    };
  },
  methods: {
    showAlert() {
      alert('Showing alert!');
    },
    updateOne(e) {
      this.outputOne = e.target.value;
    },
    updateTwo(e) {
      this.outputTwo = e.target.value;
    },
  },
}).mount('#assignment');
