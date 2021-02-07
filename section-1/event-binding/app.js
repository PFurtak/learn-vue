const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running fullname...');
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'Furtak';
      }
    },
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
    setName(e) {
      this.name = e.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
