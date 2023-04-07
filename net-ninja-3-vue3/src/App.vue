<script setup>
import SignUpForm from './components/SignUpForm.vue';

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="border border-3 border-primary">
    <div class="w-100 appMain border d-flex justify-content-center align-items-center">
      <SignUpForm />
    </div>
  </div>
</template>

<style scoped>
.appMain {
  height: 100vh;
}

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
