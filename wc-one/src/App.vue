<template>
  <div>
      <h1>Este é o componente 1!</h1>
    <form>
      <legend>Preencha os dados</legend>
      <div>
        <label for="name">Qual o seu nome?</label>
        <input type="text" id="name" v-model="form.name">
      </div>
      <div>
        <label for="estado">Estado que você mora?</label>
        <select name="estado" id="estado" v-model="form.stateSelected">
          <option value="">Selecione</option>
          <option v-for="(state, index) in states" :value="state.nome" :key="index">{{state.sigla}}</option>
        </select>
      </div>
      <button type="button" @click="doChanges">Fazer a mágica</button>
    </form>
  </div>
</template>

<script>
  import store from './store'
  export default {
    store,
    name: 'App',
    data(){
      return {
        states: [],
        form: {
          name: '',
          stateSelected: ''
        }
      }
    },
    async mounted() {
      this.getStates();
    },
    methods: {
      async getStates(){
        let states = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
        states = await states.json()
        console.log("states", states);
        this.states = states;
      },
      doChanges(){
        this.$store.commit("mutName", this.form.name);
        this.$store.commit("mutState", this.form.stateSelected);
        this.$emit('loadData', this.form);
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
