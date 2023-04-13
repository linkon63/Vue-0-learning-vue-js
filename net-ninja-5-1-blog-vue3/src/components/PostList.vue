<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
            <!-- <h3>{{ post.title }}</h3> -->
        </div>
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue';
import { onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    props: ["posts"],
    setup(props) {
        // console.log("Props Post", props.posts);
        onMounted(() => {
            console.log("Component onMounted")
        })
        
        onUnmounted(() => {
            console.log(" Component Unmounted")
        })
        
        onUpdated(() =>{
            console.log(" Component onUpdated")
        })
    },
    components: { SinglePost }
}
</script>