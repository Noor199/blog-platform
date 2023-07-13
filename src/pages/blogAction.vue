<template>
  <div class="card">
    <div class="card_info">
      <img class="user-image" src="../assets/images/user.png" />
      <div class="user-data">
        <span> {{ blog.username }} </span>
        <span> {{ blog.date }}</span>
      </div>
    </div>

    <div class="card_content">
      <form>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="input-text" v-model="blog.title" required />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            class="input-textarea"
            rows="10"
            v-model="blog.description"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn-action" v-on:click="blogAction()">
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogAction",
  mounted() {
    //if (this.selectedBlog != -1) {
    //  console.log("----");
    // }
  },
  data() {
    return {
      selectedBlog: this.$store.state.selectedBlog,
      blogs: this.$store.state.blogs,
      blog: {
        username: this.$store.state.authLogin.username,
        date: "",
        title: "",
        description: "",
      },
    };
  },
  methods: {
    blogAction() {
      if (this.selectedBlog != -1) {
        this.blogs[this.selectedBlog] = this.blog;
        this.$router.go(-1);
      } else {
        console.log("create");
      }
    },
  },
};
</script>

<style scoped>
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

.input-textarea,
.input-text {
  border-radius: 1rem;
  padding: 0 1rem;
}
.input-text {
  height: 2.5rem;
}
.btn-action {
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
