import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "buy some milk", isFav: true },
            { id: 2, title: "play Gloomhaven", isFav: false },
        ],
        name: "devKon",
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    }
})


