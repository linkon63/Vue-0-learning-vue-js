<script>
import Block from './components/Block.vue';
import Result from './components/Result.vue';
export default {
  name: "App",
  component: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      scoreShow: false
    };
  },
  methods: {
    start() {
      console.log("✔ clicked");
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.scoreShow = false

      console.log(this.delay);
    },
    endGame(reactionTime) {
      this.isPlaying = false
      this.score = reactionTime
      this.scoreShow = true
    }
  },
  components: { Block, Result }
}
</script>

<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Result :scoreShow="scoreShow" :result="score" />
    <!-- <p v-if="scoreShow">Reaction Time : {{ score }} ms</p> -->
  </div>
</template>

<style scoped>
/* .logo {
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
} */
</style>
