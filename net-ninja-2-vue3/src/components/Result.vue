<template>
    <p v-if="scoreShow">Reaction Time : {{ result }} ms</p>
</template>
<script>
export default {
    props: ['result', 'scoreShow']
}
</script>


