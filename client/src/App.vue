<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
/* import Home from './components/Home.vue' */

export default {
  /* name: 'app',
  components: {
    Home,
  } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
