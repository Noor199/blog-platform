<template>
  <div class="card">
    <div class="card_info">
      <img class="user-image" src="../assets/images/user.png" />
      <div class="user-data">
        <label> {{ username }} </label>
        <label> {{ date }}</label>
      </div>
    </div>

    <div class="card_content">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="input-text" v-model="title" required />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="input-textarea"
          rows="10"
          v-model="description"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn-action" @click="blogAction()">
        {{ selectedBlog != -1 ? "save" : "create" }}
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "blogAction",

  data() {
    return {
      selectedBlog: this.$store.state.selectedBlog,
      blogs: this.$store.state.blogs,
      username: this.$store.state.authLogin.username,
      date: moment(String(new Date())).format("MMMM DD, yyyy"),
      title: "",
      description: "",
    };
  },
  methods: {
    blogAction() {
      let blog = {
        title: this.title,
        username: this.username,
        date: this.date,
        description: this.description,
      };
      if (this.selectedBlog != -1) {
        this.blogs[this.selectedBlog] = blog;
        this.selectedBlog = -1;
      } else {
        this.blogs.push(blog);
      }

      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
label,
.card {
  cursor: default;
}
.card {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
}
.input-textarea {
  resize: none;
}
.input-textarea,
.input-text {
  padding: 0 1rem;
}
.input-text {
  height: 2.5rem;
}
.btn-action {
  font-weight: bold;
  text-transform: uppercase;
  float: right;
  width: fit-content;
  padding: 0 2rem;
  height: 3rem;
  background: green;
  border: 0;
  border-radius: 2rem;
  font-weight: bold;
  color: white;
}
</style>
