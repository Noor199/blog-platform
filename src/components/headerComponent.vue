<template>
  <div class="blog-flex">
    <img
      class="header-logo-image"
      src="../assets/images/logo.jpeg"
      v-on:click="$router.push('/')"
    />
    <div class="btn-create" v-on:click="$router.push('/blog-action')">
      Create Blog
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComponent",
};
</script>

<style scoped>
.blog-flex {
  display: flex;
  flex-direction: row;
  background: white;
  height: 5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 2rem;
  justify-content: space-between;
  padding: 0 1.5rem;
  .header-logo-image {
    cursor: pointer;
  }
  .btn-create {
    cursor: pointer;
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
    width: fit-content;
    align-items: center;
    color: black;
  }
}
.btn-create:hover {
  opacity: 0.3;
}
</style>
