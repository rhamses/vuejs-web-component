<template>
  <div id="app">
    <h1>Este é o componente 2!</h1>
    <p v-if="form && form.name">
      <b>Nome informado:</b>
      <br>
      <span>{{form.name}}</span>
    </p>
    <p v-if="form && form.stateSelected">
      <b>Estado informado:</b>
      <br>
      <span>{{form.stateSelected}}</span>
    </p>
  </div>
</template>

<script>
  import store from '../../wc-one/src/store/'
  export default {
    store,
    name: 'App',
    props: ['form'],
    mounted(){
      console.log(store);
    },
    methods: {
      checkVuex(){
        if(this.form) {
          console.log(store.getters.name);
          console.log(store.getters.state);
        }
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
