// 1. Define route components.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../view/Home.vue'
import About from '../view/About.vue'


// import JobDescription from "./view/";
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/home', name: "Home", component: Home },
    { path: '/about', name: "About", component: About },
    // catchAll 404
    {
        // path: '/:catchAll(.*)',
        // name: "NotFound",
        // component: NotFound,
    }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;
// 5. Create and mount the root instance.
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)

// app.mount('#app')

// Now the app has started!


// // 1. Define route components.

// import { createRouter, createWebHashHistory } from "vue-router"

// // These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// // 2. Define some routes
// // Each route should map to a component.
// // We'll talk about nested routes later.
// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
// ]

// // 3. Create the router instance and pass the `routes` option
// // You can pass in additional options here, but let's
// // keep it simple for now.
// const router = createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: createWebHashHistory(),
//     routes, // short for `routes: routes
// })
// export default router

