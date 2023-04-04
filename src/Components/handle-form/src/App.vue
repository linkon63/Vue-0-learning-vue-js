<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  data() {
    return {
      componentToRender: Home,
    };
  },
  components: {
    Home,
    About,
    Contact,
  },
};
</script>
<template>
  <div class="container mt-5">
    <button @click="componentToRender = 'Home'">Home</button>
    <button @click="componentToRender = 'Contact'">Contact</button>
    <button @click="componentToRender = 'About'">About</button>
    <keep-alive>
      <component :is="componentToRender"></component>
    </keep-alive>
  </div>
</template>