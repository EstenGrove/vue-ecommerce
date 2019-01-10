<template>
  <section class="ph-wrapper">
    <h2 class="product-title"></h2>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
.ph-wrapper {
  max-width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-title {
  font-family: "Raleway";
  font-size: 3rem;
}
</style>


