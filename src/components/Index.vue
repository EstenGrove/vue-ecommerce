<template>
  <section class="wrapper">
    <header class="header">
      <div class="header-title">Darin's Electronics</div>
      <h4 class="header-subTitle">Shop & Browse the latest devices</h4>
    </header>
    <ProductView></ProductView>
  </section>
</template>

<script>
import { store } from "@/store/store";
import Router from "@/router/index";
import NavBar from "@/components/NavBar";
import Shop from "@/components/Shop";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProductView from "@/components/ProductView";

export default {
  name: "Index",
  components: {
    NavBar,
    Shop,
    About,
    Contact,
    ProductView
  },
  data() {
    return {
      title: "Root(Index)"
    };
  },
  methods: {
    //
  },
  created() {
    // console.log(store);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrapper {
  max-width: 100vw;
  min-height: 100vh;
  font-family: "Raleway";
}
.header {
  width: 100%;
  height: 30vh;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}
.header-title {
  font-family: "Raleway";
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
.header-subTitle {
  text-align: center;
  font-weight: 300;
  color: #eee;
}
@media screen and (max-width: 500px) {
  .header-title {
    font-size: 1.8rem;
  }
  .header-subTitle {
    font-size: 0.8rem;
  }
}
</style>
