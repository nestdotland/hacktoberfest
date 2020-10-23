<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
