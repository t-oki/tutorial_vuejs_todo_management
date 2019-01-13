<template>
  <div class="todo">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ user }}</p>
        </div>
      </div>
      <div class="content">
        {{ todoItem.val }}<br>
        <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time>{{ parsedDate }}</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item has-text-danger" @click="onClickDelete">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: Object,
    index: Number
  },
  methods: {
    onClickDelete() {
      this.$emit("delete-item", this.index);
    }
  },
  computed: {
    parsedDate() {
      let datetime = new Date(this.todoItem.datetime);
      return datetime.toUTCString();
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
