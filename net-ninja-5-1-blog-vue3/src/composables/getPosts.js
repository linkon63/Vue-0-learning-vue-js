
import { ref } from 'vue'
const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const loadData = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')
            console.log("✔ post data from server", data)
            if (!data.ok) {
                throw Error('Data is not avilable right now !')
            }
            posts.value = await data.json()
        } catch (err) {
            // console.log(error, "error from data loading")
            console.log(err.message)
            // error.value = "Data is not avilable right now !"
            error.value = err.message
        }
    }

    return { loadData, posts, error }
}

export default getPosts

