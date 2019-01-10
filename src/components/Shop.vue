<template>
  <section class="shop-wrapper">
    <h2 class="title">{{title}}</h2>
    <ProductView></ProductView>
  </section>
</template>
<script>
import Router from "@/router/index";
import ProductView from "@/components/ProductView";

export default {
  name: "Shop",
  components: {
    ProductView
  },
  data() {
    return {
      title: "Shopping Page(Shop)"
    };
  }
};
</script>

<style scoped>
</style>

