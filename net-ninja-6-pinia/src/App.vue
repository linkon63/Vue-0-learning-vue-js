
<template lang="">
 <main>
  <!-- heading -->
  <header>
    <img src="./assets/pinia-logo.svg" alt="pinia_logo">
    <h1>{{taskStore.name + " Task Manage"}}</h1>
  </header>
<nav class="filter">
  <button @click="filter = 'all'">all</button>
  <button @click="filter = 'favs'">favs</button>
</nav>
  <div class="task-list" v-if="filter === 'all'">
    <p class="countValue">You have {{taskStore.totalCount}} task to do </p>
    <div v-for="task in taskStore.tasks" :key="task">
      <TaskDetails :task="task" />
    </div>
  </div>

  <div class="task-list" v-if="filter === 'favs'">
    <p class="countValue">You have {{taskStore.favCount}} favorite to do </p>
    <div v-for="task in taskStore.favs" :key="task">
      <TaskDetails :task="task" />
    </div>
  </div>

 </main>
</template>
<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref("all")
    return { taskStore, filter }
  }
}
</script>
<style lang="">
  
</style>
