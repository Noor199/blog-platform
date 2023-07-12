<template>
  <div class="login-card">
    <form>
      <img class="logo-image" src="../assets/images/logo.png" />
      <h3>Sign In</h3>
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control input-text form-control-lg"
          required
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control input-text form-control-lg"
          required
        />
      </div>
      <button type="submit" class="btn-login" v-on:click="doStuff()">
        Sign In
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "loginPage",
  components: [],
  methods: {
    doStuff() {
      this.$router.push("/blog-page");
    },
  },
};
</script>
<style scoped>
.login-card {
  background: white;
  display: flex;
  border-radius: 0.5rem;
  padding: 2rem;
  align-self: center;
  flex-direction: row;
}

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
}
</style>
