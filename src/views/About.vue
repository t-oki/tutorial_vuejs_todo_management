<template>
  <div id="about">
    <div>
      <input v-model="text" type="text" class="input" @keypress.enter="onSubmit">
      <button class="button" @click="onSubmit">Submit</button>
      <todo v-for="(item, i) in list" :key="item.id"
        :todo-item="item" :index="i" @delete-item="onClickDelete"/>
    </div>

    <div>
      <button class="button" @click="onClickDeleteAll">Delete All</button>
    </div>
  </div>
</template>

<script>
import todo from "@/components/Todo.vue";

export default {
  components: { todo },
  data() {
    return {
      text: "",
      list: this.$store.state.todoList,
      id: 0
    };
  },
  methods: {
    onSubmit() {
      if (this.text) {
        this.id += 1;
        this.list.push({
          id: this.id,
          val: this.text,
          checked: false,
          datetime: Date.now()
        });
        this.text = "";
        this.updateStore();
      }
    },
    onClickDelete(i) {
      this.list.pop(i);
      this.updateStore();
    },
    onClickDeleteAll() {
      this.list = [];
      this.updateStore();
    },
    updateStore() {
      this.$store.commit("setTodoList", this.list);
    }
  }
};
</Script>

<style lang="scss">
#about {
  .input {
    border: 1px solid black;
  }
}
</style>

