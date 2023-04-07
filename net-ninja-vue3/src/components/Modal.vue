<template>
    <div class="backdrop" @click.self="closeModal">
        <!-- .self is a event modifier -->
        <div class="modal" :class="{ sale: theme == 'sale' }">
            <slot></slot>
            <div class="actions">
                <slot name="header"></slot>
            </div>
            <!-- <h1>{{ header }}</h1>
            <p>{{ text }}</p> -->
        </div>
    </div>
</template>
<script>
export default {
    // props: ['header', 'text', 'theme'],
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 10px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgb(86, 84, 84);
    width: 100%;
    height: 100%;
}

.sale {
    background-color: coral;
}

.modal,
.sale h1 {
    color: white;
}

.actions {
    display: flex;
    justify-content: center;
}


/* .actions>a {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    border: 2px solid red;
    text-decoration: none;
} */
</style>