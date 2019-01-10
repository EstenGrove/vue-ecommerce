<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <a href="Index" class="navLink">
        <router-link :to="{ name: 'Index' }">Home</router-link>
      </a>
      <a href="Shop" class="navLink">
        <router-link :to="{ name: 'Shop' }">Shop</router-link>
      </a>
      <a href="About" class="navLink">
        <router-link :to="{ name: 'About' }">About</router-link>
      </a>
      <a href="Contact" class="navLink">
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </a>
    </nav>
    <aside class="aside">
      <button href="#" class="btn login" @click="toLogin">Login</button>
      <button href="#" class="btn signup" @click="toSignup">Signup</button>
    </aside>
  </div>
</template>

<script>
import Router from "@/router/index";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    toLogin() {
      this.$router.push({ name: "Login" });
    },
    toSignup() {
      this.$router.push({ name: "Signup" });
    }
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
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.nav-wrapper {
  max-width: 100vw;
  min-height: 4rem;
  display: flex;
}
.nav {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  padding: 0.3rem;
  margin-bottom: 2rem;
}
.navLink {
  text-decoration: none;
  padding: 0 0.5rem;
  position: relative;
  color: #222;
}
.navLink::after {
  display: block;
  position: absolute;
  content: "";
  top: 1.2rem;
  left: 0.4rem;
  background: #e84855;
  width: 0;
  height: 2px;
  transition: width 0.3s ease-in-out;
}
.navLink:hover::after {
  width: 80%;
}
.navLink > a {
  font-family: "Raleway";
  text-decoration: none;
  color: #222;
}
.router-link-exact-active {
  border-bottom: 2px solid #e84855;
  text-decoration: none;
}
.aside {
  margin-right: 0.5rem;
  height: 5rem;
  display: inherit;
  justify-self: flex-end;
  align-items: flex-start;
}
.btn {
  padding: 0.5rem 1rem;
  width: 5rem;
  height: 2rem;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  text-decoration: none;
  font-family: "Raleway";
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  box-shadow: 0px 6px 16px -5px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}
.login {
  background: #5c75ea;
  color: #fff;
  margin-right: 0.3rem;
}
.signup {
  background: #3eaf7c;
  color: #fff;
}
@media screen and (max-width: 450px) {
  .nav-wrapper {
    min-height: 4rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .nav {
    max-height: 4rem;
    justify-content: center;
    margin-bottom: 0;
  }
}
</style>
