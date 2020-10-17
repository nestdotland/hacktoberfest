<template>
  <div id="banner" v-if="showBanner">
    <div class="container is-max-widescreen">
      <div class="notification is-dark">
        <img class="icon" src="../assets/icons/clock.svg" />
        We will begin accepting submissions on October 23, 2020.
        <img
          class="icon is-pulled-right"
          src="../assets/icons/x.svg"
          @click="closeBanner"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    const cache = localStorage.getItem("showBanner");
    let showBanner = true;
    if (cache && cache === "no") {
      showBanner = false;
    }

    return {
      showBanner,
    };
  },
  methods: {
    closeBanner() {
      this.showBanner = false;
      localStorage.setItem("showBanner", "no");
    },
  },
};
</script>

<style lang="scss" scoped>
#banner {
  background: #363636;

  .icon {
    width: 1em;
    height: 1em;
  }
}
</style>
