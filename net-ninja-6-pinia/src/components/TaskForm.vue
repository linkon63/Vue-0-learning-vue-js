<template lang="">
    <form @submit.prevent="handleSubmit">
        <input v-model="newTask"  
        type="text" placeholder="I need to do . . .">
        <input type="submit" value="Add">
    </form>
</template>
<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';

export default {
    setup() {
        const newTask = ref('')
        const taskStore = useTaskStore()
        const handleSubmit = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    title: newTask.value,
                    isFav: false,
                    id: Math.floor(Math.random() * 10000)
                })
                newTask.value = ""
            }
        }
        return { newTask, handleSubmit }

    }
}
</script>
<style lang="">
    
</style>