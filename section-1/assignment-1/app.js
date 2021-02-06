const app = Vue.createApp({
  data() {
    return {
      name: 'Patrick',
      age: 31,
      image: 'https://global.toyota/pages/news/images/2019/01/14/1401/001.jpg',
    };
  },
  methods: {
    randNum() {
      const num = Math.random();
      return num < 0.5 ? 0 : 1;
    },
    addFive(num) {
      return num + 5;
    },
  },
});

app.mount('#assignment');
