<template>
  <div class="card">
    <div class="card_info">
      <img class="user-image" src="../assets/images/user.png" />
      <div class="user-data">
        <span> {{ card.user }}</span>
        <span> {{ card.date }}</span>
      </div>

      <div class="action-data" v-if="checkIfUserAuth()">
        <img src="../assets/images/edit.svg" />
        <img src="../assets/images/delete.svg" />
      </div>
    </div>
    <div class="card_content">
      <h2 class="blog-title">{{ card.title }}</h2>
      <p class="summary-text">
        {{ card.description }}
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
      username: JSON.parse(localStorage.loginData).username,
      card: JSON.parse(localStorage.cards)[localStorage.selectedCard],
    };
  },
  methods: {
    checkIfUserAuth() {
      if (this.card.user === this.username) return true;
      return false;
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
