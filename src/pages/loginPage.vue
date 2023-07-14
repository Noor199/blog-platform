<template>
  <div class="card">
    <form @submit="navigateTo()" action="/blog-page" id="blog-login">
      <img class="logo-image" src="../assets/images/logo.jpeg" />
      <div class="form-group">
        <label>Username</label>
        <input
          type="text"
          class="form-control text-input-style input-text form-control-lg"
          v-model="$store.state.authLogin.username"
          minlength="5"
          maxlength="30"
          required
          @input="$store.state.authLogin.password = ''"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control text-input-style input-text form-control-lg"
          v-model="$store.state.authLogin.password"
          minlength="8"
          maxlength="30"
          required
        />
      </div>
      <button type="submit" class="button-main-style btn-login">Sign In</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "loginPage",
  methods: {
    navigateTo() {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    },
  },
};
</script>
<style scoped>
.logo-image {
  width: 10rem;
  display: flex;
  margin: auto;
}

.form-group {
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
}

.btn-login {
  background: #d31c06;
  width: 100%;
}

.input-text {
  height: 2rem;
  width: 20rem;
  padding: 0 0.4rem;
}
</style>
