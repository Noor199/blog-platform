<template>
  <div class="blog-list">
    <headerComponent></headerComponent>
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
              <label> {{ card.username }}</label>
              <label> {{ card.date }}</label>
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
import headerComponent from "@/components/headerComponent";
import * as blogItem from "@/assets/mockData/blogs.json";
export default {
  name: "blogPage",
  components: { headerComponent },
  mounted() {
    this.$store.state.selectedBlog = -1;

    if (!this.$store.state.blogs) {
      this.generateMockData();
    }
  },
  methods: {
    generateMockData() {
      this.$store.state.blogs = [];
      for (let i = 0; i < 6; i++) {
        this.$store.state.blogs.push(blogItem);
      }
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    },
    navigateToDetails(index) {
      this.$store.state.selectedBlog = index;
      this.$router.push("/blog-details");
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: -webkit-fill-available;
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
.blog-list {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
