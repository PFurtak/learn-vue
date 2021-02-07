const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  watch: {
    counter(count) {
      if (count > 50) {
        this.counter = 0;
      }
    },
    // name(name) {
    //   this.fullname = name + ' ' + this.lastName;
    // },
    // lastName(lastName) {
    //   this.fullname = this.name + ' ' + lastName;
    // },
  },
  computed: {
    fullname() {
      console.log('Running fullname...');
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
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
      this.lastName = '';
    },
  },
});

app.mount('#events');
