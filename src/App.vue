<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      ici !
      <tr v-for="(parking,index) in parkings" :key="index">
        <td>{{ parking.nom }}</td>
      </tr>
      <button @click="u()">Update</button>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    Coucpu
  </div>
</template>
<script>

import axios from 'axios'


axios
    .get('http://localhost:8888/',(req, res) => {
      res.setHeader("Access-Control-Allow-Origin","*");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    })
    .then(response => console.log("ICI"+response))
export default {

  data: () => {
    return {
      parkings :  [ { nom: "Home", color:"black"}, { nom: "Lab", color:"blue"}, { nom: "Library", color:"red"} ]
    }
  },
  methods: {
    updateParkings: function() {
      this.parkings = [{ nom: "Home2", color:"black"}];
      fetch( '../src/parkings.json', {
        headers :{
        'Content-Type': 'application/json',
            'Accept': 'application/json'}})
          .then (response => console.log(response.data))
    },
    u: function (){
      console.log(JSON.parse('{"result":true, "count":42}'));
      return JSON.parse('{"result":true, "count":42}');
    }
  },

}


</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
