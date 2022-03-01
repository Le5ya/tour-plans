<template>
  <!-- <a href="single.html"> -->
  <div :class="classItem" @click="onEmmit(card.id)">
    <img
      :src="require(`@/assets/img/${card.image}`)"
      class="mb-3"
      :alt="card.image"
    />

    <h3 class="">{{ card.title }}</h3>
    <div class="description">
      {{ card.text }}

      <span>{{ card.span }}</span>
    </div>
  </div>
  <!-- </a> -->
</template>
<script>
export default {
  props: {
    classItem: {
      type: String,
      required: false,
    },
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      console.log(id);
      this.$emit("onNavigate", id);
    },
  },
};
</script>