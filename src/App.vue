<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import Router from "@/router/index";
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
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
  font-family: "Raleway";
}
</style>
