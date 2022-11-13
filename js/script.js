
const {createApp} = Vue;

createApp({
  data() {
    return {
      title: 'Countries',
      apiUrl: 'https://api.sampleapis.com/countries/countries',
      countries:[]
    }
  },
  methods: {
    getApi() {
      axios.get(this.apiUrl)
      .then(result => {
        console.log(result.data);
        this.countries = result.data
      })
    }
  },
  mounted() {
    console.log('montata');
    this.getApi();
  }
}).mount('#app')



