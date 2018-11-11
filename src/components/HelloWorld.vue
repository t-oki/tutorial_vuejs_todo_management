<template>
  <div class="hello">
    <form>
      <button class="button is-text" @click="addTodo()">Add Task</button>
      <button class="button is-text" @click="removeTodo()">Delete Finished Task</button>
      <p>input: <input type="text" v-model="newTodo"></p>
    </form>
  <div class="task-list">
    <label class="task-list__item label" v-for="todo in todos" v-bind:class="{ 'task-list__item--checked': todo.done }">
      <input type="checkbox" v-model="todo.done">
      <input type="checkbox" v-model="todo.editing">
      <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing=!todo.editing">
      <span v-else>{{ todo.text }}</span>
      </label>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      todos: [],
      newTodo: ""
    };
  },
  methods: {
    addTodo: function(event) {
      let text = this.newTodo && this.newTodo.trim();
      if (!text) {
        return;
      } else {
        this.todos.push({
          text: text,
          done: false
        });
        this.newTodo = "";
        this.saveTodo();
      }
    },
    removeTodo: function(event) {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1);
      }
      this.saveTodo();
    },
    saveTodo: function() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    loadTodo: function() {
      this.todos = JSON.parse(localStorage.getItem("todos"));
      if (!this.todos) {
        this.todos = [];
      }
    }
  },
  mounted: function() {
    this.loadTodo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
