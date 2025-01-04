<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/articles/new">New Article</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background: #42b983;
  margin-bottom: 30px;
}

nav a {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
