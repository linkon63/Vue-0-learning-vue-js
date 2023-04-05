// ✅ Topic 1 : Vue data and element model
// new Vue({
//     el: "#app",
//     data: {
//         title: "Hello Linkon",
//         isItTrue: true,
//         cars: ['frod', 'toyota'],
//         robot: {
//             name: "this is robot"
//         },
//         // greeting: () => {
//         //     return "Im greeting"
//         // }
//     },
//     methods: {
//         greeting() {
//             return this.title
//         },
//         hello(){
//             return 10
//         }
//     }
// })

// ✅ Topic 2 :  Directives: V-bind

// new Vue({
//     el: '#app',
//     data: {
//         src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
//         alt: "this image",
//         link: "www.google.com"
//         // Directives: V-text & V-html
//     }

// })

//  ✅ Topic 3 : Conditional Rendering


// new Vue({
//     // el: '#app',
//     // data: {
//     //     user: "linkon",
//     //     age: 16,
//     //     allowAge: 18
//     // }

// })

// Directives: V-show DOM render also security purpose
//  ✅ Topic 4 Loop: V-for
// new Vue({
//     el: '#app',
//     data: {
//         cars: ['bmw', 'ford', 'toyota'],
//         users: {
//             name: 'luffy',
//             age: 50,
//             country: 'japan'

//         }
//     },
// })


//  ✅ Topic 5  V-once


// new Vue({
//     el: '#app',
//     data: {
//         name: "linkon"
//     },
//     methods: {
//         update() {
//             setTimeout(() => {
//                 this.name = "devKon"
//             }, 3000)
//         }
//     }
// })
//  ✅ Topic 6 Event Use: V-on

// new Vue({
//     el: '#app',
//     data: {
//         name: "linkon",
//         x: 0,
//         y: 0,
//     },
//     methods: {
//         updateName(newName, event) {
//             setTimeout(() => {
//                 this.name = newName
//                 console.log("event : ", event)
//             }, 0)
//         },
//         getCoord(e) {
//             this.x = e.clientX
//             this.y = e.clientY
//         }
//     }
// })

// ✅ Topic 7  V-model
// new Vue({
//     el: '#app',
//     data: {
//         formData: {
//             firstName: "initialFirstValue",
//             lastName: "initialFirstValue"
//         }
//     },
//     methods: {
//         handleForm() {
//             console.log("form submit", this.formData)
//         },
//         updateName(newName, event) {
//             this.name = newName
//             console.log("event : ", event)
//         },

//     }
// })

// ✅ Topic 8 Computed Property


// new Vue({
//     el: '#app',
//     data: {
//         a: 0,
//         b: 0,
//         salary: 10,
//     },
//     computed: {
//         addToA() {
//             console.log("add A")
//             return this.a + this.salary
//         },
//         addToB() {
//             console.log("add B")
//             return this.b + this.salary
//         }
//     }
// })



// ✅ Topic 9 Create More Instance and access to the another ins :

// const app1 = new Vue({
//     el: '#app1',
//     data: {
//         value: "1"
//     },
//     methods: {
//         changeValue() {
//             app2.value = 'this is change from 1 and value change of app2'
//         }
//     }
// })
// const app2 = new Vue({
//     el: '#app2',
//     data: {
//         value: "2"
//     },
//     computed: {

//     }
// })

//✅ Topic 10 Mount & Template

// const temp = `<p>Name is : {{name}}`

// const app1 = new Vue({
//     data: {
//         name: "Luffy"
//     },
//     template: temp
// })

// setTimeout(() => {
//     app1.$mount('#app')
// }, 2000)



//✅ Topic 10 Use of Basic Component

Vue.component('maincomp', {
    data() {
        return {
            name: 'Luffy'
        }
    },
    template: `<p>{{name}}</p>`
})

new Vue({
    el: "#app"
})













