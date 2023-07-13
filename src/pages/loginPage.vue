<template>
  <div class="card">
    <form>
      <img class="logo-image" src="../assets/images/logo.jpeg" />
      <div class="form-group">
        <label>Username</label>
        <input
          type="text"
          class="form-control input-text form-control-lg"
          v-model="$store.state.authLogin.username"
          required
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control input-text form-control-lg"
          v-model="$store.state.authLogin.password"
          required
        />
      </div>
      <button type="submit" class="btn-login" v-on:click="navigateTo()">
        Sign In
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "loginPage",
  methods: {
    navigateTo() {
      this.$router.push("/blog-page");
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
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  height: 3rem;
  align-items: center;
  background: #d31c06;
  border: 0;
  border-radius: 2rem;
  margin-top: 2rem;
  color: white;
}

.input-text {
  height: 2rem;
  border-radius: 1rem;
  width: 20rem;
  padding: 0 0.4rem;
}
</style>
