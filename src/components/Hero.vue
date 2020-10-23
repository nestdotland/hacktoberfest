<template>
  <div class="hero is-medium is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2 has-text-centered">
          Nest.Land Hacktoberfest 2020
        </h1>
        <h2 class="subtitle is-4 has-text-centered">
          Growth <i>hacking</i> the Deno Ecosystem
        </h2>
        <center>
          <a
            href="https://github.com/nestdotland/hacktoberfest-2020"
            class="button"
            >Contribute!</a
          >
        </center>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  background: none;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ff8ae2;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    color: #9c4668;
    background-color: #ffffff;
    border-color: #ffffff;
  }
}

@media all and (max-width: 30em) {
  .button {
    display: block;
    margin: 0.4em auto;
  }
}
</style>
