import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[
      { id: 1, val: "みかん", checked: false },
      { id: 2, val: "りんご", checked: false }
    ],  
  },
  mutations: {
    setTodoList(state, list){
      state.todoList = list
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})
