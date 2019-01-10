<template>
  <section class="about-wrapper">
    <h2 class="title">{{title}}</h2>
  </section>
</template>
<script>
import Router from "@/router/index";

export default {
  name: "Home",
  data() {
    return {
      title: "Home Page"
    };
  }
};
</script>

<style scoped>
</style>
