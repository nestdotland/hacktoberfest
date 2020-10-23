<template>
  <div class="home">
    <Hero />
    <Info />
    <Participate />
    <Speakers />
    <Sponsors />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Info from "@/components/Info.vue";
import Participate from "@/components/Participate.vue";
import Speakers from "@/components/Speakers.vue";
import Sponsors from "@/components/Sponsors.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Info,
    Participate,
    Speakers,
    Sponsors
  }
};
</script>
