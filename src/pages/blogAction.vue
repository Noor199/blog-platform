<template>
  <div class="card big-card">
    <div class="card_info">
      <img class="user-image" src="../assets/images/user.png" />
      <div class="user-data">
        <label> {{ blog.username }} </label>
        <label> {{ blog.date }}</label>
      </div>
    </div>

    <div class="card_content">
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          class="input-text text-input-style"
          v-model="blog.title"
          required
        />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="input-textarea text-input-style"
          rows="10"
          v-model="blog.description"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="button-main-style btn-action"
        @click="blogAction()"
      >
        {{ selectedBlog != -1 ? "save" : "create" }}
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "blogAction",
  mounted() {
    if (this.selectedBlog != -1) {
      this.bindData();
    }
  },
  data() {
    return {
      selectedBlog: this.$store.state.selectedBlog,
      blogs: this.$store.state.blogs,
      blog: {
        username: this.$store.state.authLogin.username,
        date: moment(String(new Date())).format("MMMM DD, yyyy"),
        title: "",
        description: "",
      },
    };
  },
  methods: {
    bindData() {
      this.blog = {
        ...this.blog,
        title: this.blogs[this.selectedBlog].title,
        description: this.blogs[this.selectedBlog].description,
      };
    },
    blogAction() {
      this.selectedBlog != -1
        ? (this.blogs[this.selectedBlog] = this.blog)
        : this.blogs.unshift(this.blog);

      this.$router.go(-1);
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    },
  },
};
</script>

<style scoped>
label,
.card {
  cursor: default;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
}

.input-textarea {
  resize: none;
}

.input-text {
  height: 2.5rem;
  padding: 0 1rem;
}

.btn-action {
  float: right;
  width: fit-content;
  padding: 0 2rem;
  background: green;
  border: 0;
}
</style>
