<template>
  <div class="card">
    <div class="card_info">
      <img class="user-image" src="../assets/images/user.png" />
      <div class="user-data">
        <span> {{ blog.username }}</span>
        <span> {{ blog.date }}</span>
      </div>

      <div class="action-data" v-if="checkIfUserAuth()">
        <img
          src="../assets/images/edit.svg"
          @click="$router.push('/blog-action')"
        />
        <img src="../assets/images/delete.svg" @click="deleteItem()" />
      </div>
    </div>
    <div class="card_content">
      <h2 class="blog-title">{{ blog.title }}</h2>
      <p class="summary-text">
        {{ blog.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogDetails",
  props: [],
  data() {
    return {
      blogs: this.$store.state.blogs,
      blog: this.$store.state.blogs[this.$store.state.selectedBlog],
    };
  },
  methods: {
    checkIfUserAuth() {
      if (this.blog.username === this.$store.state.authLogin.username)
        return true;
      return false;
    },
    deleteItem() {
      this.blogs.splice(this.$store.state.selectedBlog, 1);
      this.$store.state.selectedBlog = -1;
      this.$router.go(-1);
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
.action-data {
  display: flex;
  height: 2.5rem;
}
</style>
