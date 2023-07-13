<template>
  <div class="blog-flex">
    <button class="btn-create" v-on:click="$router.push('/blog-action')">
      Create Blog
    </button>
    <div class="cards">
      <div
        class="cards_item"
        v-for="(card, index) in $store.state.blogs"
        v-bind:key="index"
      >
        <div class="card" @click="navigateToDetails(index)">
          <div class="card_info">
            <img class="user-image" src="../assets/images/user.png" />
            <div class="user-data">
              <span> {{ card.username }}</span>
              <span> {{ card.date }}</span>
            </div>
          </div>
          <div class="card_content">
            <h2 class="blog-title">{{ card.title }}</h2>
            <p class="summary-text">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPage",
  mounted() {
    this.$store.state.selectedBlog = -1;

    if (this.$store.state.blogs.length === 0) {
      this.generateMockData();
    }
  },
  methods: {
    generateMockData() {
      let item = {
        title: "Lorem Ipsum",
        username: "user1",
        date: "July 13, 2023",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      };

      for (let i = 0; i < 6; i++) {
        this.$store.state.blogs.push(item);
      }
    },
    navigateToDetails(index) {
      this.$store.state.selectedBlog = index;
      this.$router.push("/blog-details");
    },
  },
};
</script>

<style scoped>
.blog-flex {
  display: flex;
  flex-direction: column;
  .btn-create {
    display: flex;
    width: -moz-fit-content;
    width: 100%;
    justify-content: center;
    height: 3rem;
    align-items: center;
    background: gray;
    border: 0;
    color: white;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: fit-content;
    margin: auto;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    max-width: 30%;
  }
}

.blog-title {
  margin: 0.5rem 0;
}

.summary-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
}
</style>
