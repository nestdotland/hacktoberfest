<template>
  <div class="footer is-dark">
    <div class="container is-max-widescreen">
      <p class="has-text-white">
        Made with <b class="pink"><span>&</span>hearts;</b> for the Deno
        Community.
        <a
          class="is-pulled-right"
          href="https://vercel.com/?utm_source=nest-land"
        >
          <img src="../assets/icons/sponsor.svg" />
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer.is-dark {
  background: #363636;
  padding: 3rem 1.5rem;
}
.pink {
  color: #ff6188;
}
</style>
