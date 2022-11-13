
const {createApp} = Vue;

createApp({
  data() {
    return {
      title: 'Countries List'
    }
  },
  mounted() {
    console.log('montata');
  }
}).mount('#app')






// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });