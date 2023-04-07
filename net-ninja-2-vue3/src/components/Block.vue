<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    methods: {
        startTimer() {
            console.log("Start timer:")
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer)
            console.log("stop time", this.reactionTime)
            this.$emit('end', this.reactionTime)
        }
    },
    mounted() {
        console.log("Mounted component");
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
            console.log("Hello Im delay time : ", this.delay)
        }, this.delay);
    }
    ,
    updated() {
        console.log("updeted component")
    }
}
</script>

<style scoped>
.block {
    width: 400px;
    border-radius: 20px;
    background-color: green;
    color: whitesmoke;
    padding: 100px 0;
    margin: 40px auto;
    text-align: center;
}
</style>



