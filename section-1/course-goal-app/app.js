const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Complete and use Vue in a project!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    randGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? 'Learn Vue' : 'Master Vue';
    },
  },
});

app.mount('#user-goal');
