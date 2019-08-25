<template>
  <div id="app">
    <nav class="navbar">
        <router-link to='/' class="nav-item">Home</router-link>
        <router-link to='/signin' class="nav-item">Sign In</router-link>
        <router-link to='/signup' class="nav-item">Sign Up</router-link>
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

.navbar {
  display: flex;
  justify-content: center;
}

.nav-item {
  padding: 50px;
  color: #2c3e50;
}
</style>
