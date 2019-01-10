<template>
  <section class="pv-wrapper">
    <div class="search-section">
      <input type="text" name="search" id="searchInput" placeholder="iphone, galaxy 6...">
      <button class="btn">Search</button>
    </div>
    <main class="pv-container">
      <div class="item img-1"></div>
      <div class="item img-2"></div>
      <div class="item img-3"></div>
      <div class="item img-4"></div>
      <div class="item img-5"></div>
      <div class="item img-6"></div>
      <div class="item img-7"></div>
      <div class="item img-8"></div>
    </main>
  </section>
</template>

<script>
export default {
  name: "ProductView",
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
.pv-wrapper {
  max-width: 100vw;
  min-height: 100vh;
}
.search-section {
  max-width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
#searchInput {
  width: 30rem;
  padding: 0.7rem 1.2rem;
  padding-left: 0.2rem;
  border-radius: 0.4rem;
  outline: none;
  font-size: 1rem;
}
#searchInput::placeholder {
  color: #eaecef;
}
.btn {
  height: 2rem;
  display: inline-block;
  padding: 0 1.5rem;
  background: #5c75ea;
  color: #fff;
  border: none;
  outline: none;
  margin-left: -0.1rem;
}
.btn:hover {
  cursor: pointer;
}
.pv-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-template-rows: repeat(auto-fit, 20rem);
  justify-content: center;
  grid-gap: 1rem 1rem;
}
.item {
  background: #eaecef;
  height: 20rem;
  border: 1px solid #444;
  border-radius: 0.3rem;
  transition: all 0.3s ease-in-out;
}
.item:hover {
  box-shadow: 2px 6px 16px -5px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}
</style>
