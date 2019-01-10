<template>
  <section class="contact-wrapper">
    <h2 class="title">{{title}}</h2>
    <h4 class="sub-title">Questions or comments?</h4>
    <h4 class="sub-title">
      Email me
      <a
        href="mailto:echo.alchemist.design@gmail.com?Subject=Hello!"
      >echo.alchemist.design@gmail.com</a>
    </h4>
  </section>
</template>
<script>
import Router from "@/router/index";

export default {
  name: "Contact",
  component: {},
  data() {
    return {
      title: "Contact Page"
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
.contact-wrapper {
  font-family: "Raleway";
}
.title,
.sub-title {
  font-family: "Raleway";
}
</style>
