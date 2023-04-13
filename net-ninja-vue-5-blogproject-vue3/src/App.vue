<script setup>
// import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1>App Vue</h1>
  <router-link :to="About" path="'/about'">Go to About</router-link> <br>
  <!-- <router-link :to="Home" path>Go to Home</router-link> -->
  <router-view />
    <!-- <h1> VUE APP</h1>
                      <h1>Home Page</h1>
                      <router-link to="/about">Go to About</router-link>
                      <router-view /> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
