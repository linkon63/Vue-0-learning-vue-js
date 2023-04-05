<script>
import Home from "./componentsForm/Home.vue";
import About from "./componentsForm/About.vue";
import Contact from "./componentsForm/Contact.vue";

export default {
  data() {
    return {
      componentToRender: Home,
    };
  },
  components: {
    Home,
    About,
    Contact,
  },
};
</script>
<template>
  <div class="container mt-5">
    <button @click="componentToRender = 'Home'">Home</button>
    <button @click="componentToRender = 'Contact'">Contact</button>
    <button @click="componentToRender = 'About'">About</button>
    <keep-alive>
      <component :is="componentToRender"></component>
    </keep-alive>
  </div>
</template>
<!-- - 
<template>
  <h1>Parent</h1>
  <ListHelperVue>
    <template #header>
      <ul>
        <li v-for="item in data" :key="item">
          {{ item }}
        </li>
      </ul>
    </template>

    <template #pera>
      <p>Paragraph</p>
    </template>

    <template v-slot:[loader]>
     <p :slot="loader">See you again</p>
      <p>See you again</p>
    </template>
  </ListHelperVue>
</template>

<script>
import ListHelperVue from "./Components/ListHelper.vue";

export default {
  data() {
    return {
      data: [1, 2, 3, 6],
      loader: "",
    };
  },
  components: {
    ListHelperVue,
  },
  created() {
    setTimeout(() => {
      console.log("other is created");
      this.loader = "other";
    }, 3000);
  },
}; -->

<!-- 
// ------Before slot------
// import Header from "./Components/HeaderFooter/Header.vue";
// import Footer from "./Components/HeaderFooter/Footer.vue";

// export default {
//   data() {
//     return {
//       fName: "Linkon",
//       lName: "Dev",
//       age: 12,
//       msg: "Hello World!",
//       propsMsg: "Linkon Send you props",
//       array: [1, 2, 3, 6, 5, 4, 8, 54, , 4, 54, 5, 45, 45, 4, 54, 5],
//     };
//   },
//   components: {
//     Header,
//     Footer,
//   },
// };

// <template>

// <p>{{ msg }}</p>
//   <Header
//     :firstName="fName"
//     :lastName="lName"
//     :age="age"
//     @updateValue="fName = $event"
//   >
//    Update data from children 
//   </Header>
//   <Header :myName="propsMsg" :array="array"></Header> 
//   <Header myName="Linkon Props"></Header> 
//   <Footer :lastName="lName"></Footer>
// </template>
</script>


-->