const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    submitForm() {
      alert('Submitted');
    },
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
