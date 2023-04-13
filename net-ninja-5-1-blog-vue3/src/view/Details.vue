<template lang="">
    <div>
        <h1>Details page</h1>
        <div v-if="error">{{error}}</div>
        <div v-if="post" class="post">
            <h3>{{post.title}}</h3>
            <p class="pre">{{post.body}}</p>
        </div>
    </div>
</template>
<script>
import getPost from '../composables/getPost';
export default {
    props: ['id'],
    setup(props) {
        const { loadData, post, error } = getPost(props.id)
        loadData()
        return { post, error }
    }

}
</script>
<style lang="">
    
</style>