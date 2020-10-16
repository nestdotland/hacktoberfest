<template>
  <div class="home">
    <Hero />
    <Speakers />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Speakers from "@/components/Speakers.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Speakers
  }
};
</script>
