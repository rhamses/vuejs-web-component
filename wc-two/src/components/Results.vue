<template>
  <div id="app">
    <h1>Este é o componente 2!</h1>
    <p>
      <b>Nome informado:</b>
      <br>
      <span>{{name}}</span>
    </p>
    <p>
      <b>Estado informado:</b>
      <br>
      <span>{{state}}</span>
    </p>
    <button @click='checkStore'>check store</button>
  </div>
</template>

<script>
  import store from '../../../wc-one/src/store/'
  export default {
    store,
    name: 'Results',
    created() {
      console.warn('When the component was created.');
    },

    mounted() {
      console.warn('When the component was mounted.');
    },

    updated() {
      console.warn('When the component was updated.');
    },

    destroyed() {
      console.warn('When the component was destroyed.');
    },
    methods: {
      checkStore(){
        console.log('asdasd', store.getters);
      }
    },
    computed: {
      name(){
        console.log('asdasd');
        return store.getters.name;
      },
      state(){
        return store.getters.state;
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
