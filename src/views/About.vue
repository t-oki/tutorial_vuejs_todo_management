<template>
  <div id="about">
    <div>
      <input v-model="text" type="text" class="input" @keypress.enter="onSubmit">
      <button class="button" @click="onSubmit">Submit</button>
      <ul>
        <li v-for="(item, i) in list"　:key="item.id">
          <input v-model="item.checked" type="checkbox">
          <span>{{ item.val }}</span>
          <button class="button" @click="onClickDelete(i)">Delete</button>
        </li>
      </ul>
    </div>

    <div>
      <button class="button" @click="onClickDeleteChecked">Delete Checked</button>
      <button class="button" @click="onClickDeleteAll">Delete All</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      list: this.$store.state.todoList,
      id: 2
    };
  },
  methods: {
    onSubmit() {
      if (this.text) {
        this.id += 1;
        console.log(this.id);
        this.list.push({
          id: this.id,
          val: this.text,
          checked: false
        });
        this.text = "";
        this.updateStore();
      }
    },
    onClickDelete(i) {
      this.list.pop(i);
      this.updateStore();
    },
    onClickDeleteChecked() {
      this.list = this.list.filter(item => !item.checked);
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

