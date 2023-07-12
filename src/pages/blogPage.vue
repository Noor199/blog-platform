<template>
  <div class="main">
    <ul class="cards">
      <li class="cards_item" v-for="(card, index) in cards" v-bind:key="index">
        <div class="card">
          <div class="card_image">
            <img src="https://picsum.photos/500/300/?image=10" />
          </div>
          <div class="card_content">
            <h2>{{ card.title }}</h2>
            <p>
              {{ card.description }}
            </p>
            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loginPage",

  data() {
    return {
      cards: [
        {
          title: "Card Grid Layout",
          image: "https://picsum.photos/500/300/?image=10",
          description:
            " Demo of pixel perfect pure CSS simple responsive card grid layout",
        },
        {
          title: "Card Grid Layout",
          image: "https://picsum.photos/500/300/?image=10",
          description:
            " Demo of pixel perfect pure CSS simple responsive card grid layout",
        },
        {
          title: "Card Grid Layout",
          image: "https://picsum.photos/500/300/?image=10",
          description:
            " Demo of pixel perfect pure CSS simple responsive card grid layout",
        },
        {
          title: "Card Grid Layout",
          image: "https://picsum.photos/500/300/?image=10",
          description:
            " Demo of pixel perfect pure CSS simple responsive card grid layout",
        },
        {
          title: "Card Grid Layout",
          image: "https://picsum.photos/500/300/?image=10",
          description:
            " Demo of pixel perfect pure CSS simple responsive card grid layout",
        },
        {
          title: "Card Grid Layout",
          image: "https://picsum.photos/500/300/?image=10",
          description:
            " Demo of pixel perfect pure CSS simple responsive card grid layout",
        },
        {
          title: "Card Grid Layout",
          image: "https://picsum.photos/500/300/?image=10",
          description:
            " Demo of pixel perfect pure CSS simple responsive card grid layout",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
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

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background-color: white;
}
</style>
