<template>
  <div>
    <router-view />
  </div>
  <!-- <main-page /> -->
</template>

<script>
import MainPage from "@//views/MainPage.vue";
import SinglePage from "@//views/SinglePage.vue";
export default {
  components: { MainPage, SinglePage },
};
</script>

<style>
</style>
