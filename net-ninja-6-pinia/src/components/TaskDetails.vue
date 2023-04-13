<template lang="">
    <div class="task">
        <h1>{{task.title}}</h1>
        <div class="icons">
            <i class="material-symbols-outlined">
            delete_forever
            </i>
            <i class="material-symbols-outlined">
            favorite
            </i>
        </div>
    </div>
</template>
<script>
export default {
    props: ['task']
}
</script>
<style lang="">
    
</style>