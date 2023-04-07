<script>
import Modal from './components/Modal.vue'

export default {
  name: 'APP',
  components: { Modal },
  data() {
    return {
      title: "VUE CODE LEARNING",
      header: "modal header coming from perents",
      text: "props text",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
  }
}

</script>

<template>
  <div class="parent">
    <h1>{{ title }}</h1>

    <button @click="toggleModal()">Open Modal 1</button>
    <button @click="toggleModalTwo()">Open Modal 2</button>

    <Teleport to="#modal">

      <div v-if="showModal">
        <!-- data binding -->
        <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
          <h1>Hello! Please sign up</h1>
          <template v-slot:header>
            <a href="http://" target="_blank">Sign In</a>
            <a href="http://" target="_blank">Sign Up</a>
          </template>
        </Modal>
        <!-- <Modal header="sign up gateway" text="modal generating text" /> -->
      </div>

      <div v-if="showModalTwo">
        <!-- data binding -->
        <Modal :header="header" :text="text" @close="toggleModalTwo">
          <h1>Hello! Please sign up</h1>
          <p>There is modal two</p>
        </Modal>
        <!-- <Modal header="sign up gateway" text="modal generating text" /> -->
      </div>
    </Teleport>

  </div>
</template>

<style scoped>
.parent,
#modal h1 {
  color: rgb(191, 0, 0);
  text-align: center;
}


.parent,
#modal p {
  color: rgb(10, 187, 226);
  text-align: center;
  font-weight: bolder;
}

#modal a {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  /* border: 2px solid red; */
  margin-right: 10px;
}

.parent {
  text-align: center;
}
</style>
