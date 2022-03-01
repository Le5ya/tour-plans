<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col-lg-10 offset-1">
        <img
          class="mb-4 w-100"
          :src="require(`@/assets/img/${card.image}`)"
          alt="${card.image}"
        />
        <h2>{{ card.title }}</h2>
        <div class="description">
          {{ card.text }}
        </div>
        <router-link to="/">To Home</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import MainPage from "@/views/MainPage.vue";

export default {
  components: { MainPage },
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
      console.log(this.$store.getters["getTourById"](this.$route.params.id));
      return this.$store.getters["getTourById"](this.$route.params.id);
    },
  },
};
</script>
