<template>
  <section class="about-wrapper">
    <header class="header-section">
      <h2 class="title">About</h2>
    </header>
  </section>
</template>
<script>
import Router from "@/router/index";

export default {
  name: "About",
  data() {
    return {
      title: "About Page"
    };
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
.about-wrapper {
  max-width: 100vw;
  min-height: 100vh;
}
.title {
  font-family: "Raleway";
  font-size: 3rem;
}
.header-section {
  width: 100%;
  height: 20rem;
  margin-top: 3rem;
  padding: 2rem 10%;
  border: 1px solid #aaa;
  border-left: none;
  border-right: none;
}
</style>
