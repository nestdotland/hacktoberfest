<template>
  <div class="home">
    <Hero />
    <Info />
    <Speakers />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Info from "@/components/Info.vue";
import Speakers from "@/components/Speakers.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Info,
    Speakers,
  },
};
</script>
