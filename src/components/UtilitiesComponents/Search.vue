<template>
  <div class="search-wrapper">
    <div class="search-container">
      <input type="text" name="search" class="searchInput">
    </div>
  </div>
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
.search-wrapper {
  max-width: 100vw;
  height: 5rem;
}
.search-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
