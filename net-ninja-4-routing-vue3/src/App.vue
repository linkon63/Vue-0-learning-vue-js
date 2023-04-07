<script setup>
// import About from './view/About.vue';
// import Jobs from './view/jobs/Jobs.vue';

</script>

<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link :to="{ name: 'About' }">Go to About</router-link>
    <br>
    <router-link :to="{ name: 'Job' }">Go to Jobs</router-link>
    <br>
    <!-- <router-link :to="{ path: '/jobs' }">Go to Jobs</router-link> -->

    <!-- <router-link :to="{ name: 'jobs', params: { username: 'erina' } }">
                User
              </router-link> -->


    <router-view></router-view>
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
