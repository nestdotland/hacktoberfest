<template>
  <div class="nav">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="container is-max-widescreen">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="../assets/logos/logo.svg" />
            <p class="nest is-uppercase">nest</p>
          </router-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            :class="burgerClass"
            @click="toggleBurger"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="burgerClass">
          <div class="navbar-end">
            <div class="navbar-item">
              <router-link class="has-text-white" to="/x">
                Submissions
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      burgerToggled: false,
      burgerClass: ""
    };
  },
  methods: {
    toggleBurger() {
      if (this.burgerToggled) {
        this.burgerToggled = false;
        this.burgerClass = "";
      } else {
        this.burgerToggled = true;
        this.burgerClass = "is-active";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
p.nest {
  margin-left: 10px;
}
</style>
