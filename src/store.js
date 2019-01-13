import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[],
    user: "David"
  },
  mutations: {
    setTodoList(state, list){
      state.todoList = list
    },
    setName(state, name){
      state.user = name
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})
