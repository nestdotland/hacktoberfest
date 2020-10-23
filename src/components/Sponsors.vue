<template>
  <div class="sponsors">
    <div class="hero is-dark is-small">
      <div class="hero-body">
        <div class="container is-max-widescreen">
          <h1 class="title">
            In Collaboration With
          </h1>
          <a href="https://sap.com/"
            ><img class="logo" src="../assets/logos/sap.svg" alt="SAP logo"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsors {
  .logo {
    width: 15%;
    filter: grayscale(1);
    transition: filter 0.3s linear;

    &:hover {
      filter: grayscale(0);
      transition: filter 0.3s linear;
    }
  }
}
</style>
