<template>
  <div id="participate">
    <div class="hero is-dark is-small">
      <div class="hero-body">
        <div class="container is-max-widescreen">
          <h1 class="title">Participate!</h1>
          <hr />
          <h2 class="subtitle is-4">
            Build a Deno module
          </h2>
          <h2 class="subtitle">
            Complete a Deno module and publish it to Nest.land and Deno.land/x.
            <br />
            Extra points will be awarded to modules that meet the following
            criteria:
            <ul>
              <li>
                Complete or leverage
                <a href="https://nest.land/package/web3">web3</a>
              </li>
              <li>
                Complete or leverage
                <a href="https://nest.land/package/nlp"
                  >Natural Language Processing</a
                >
              </li>
              <li>
                Build a canvas module for Deno
              </li>
              <li>
                Build a module for accessing disk information and writing raw
                data to any device
              </li>
            </ul>
          </h2>
          <h2 class="subtitle is04">Boy Scout Tour</h2>
          <h2 class="subtitle">
            Pick any Nest.land or Deno.land/x module and leave it in better
            condition than you found it by raising a beneficial PR on its
            repository. (Follow the
            <a
              href="https://medium.com/@biratkirat/step-8-the-boy-scout-rule-robert-c-martin-uncle-bob-9ac839778385"
              >Boy Scout Rule</a
            >)
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#participate {
  background: #363636;

  h1 {
    margin-top: 1.5rem;
  }

  hr {
    height: 0.6em;
    width: 5%;
    background-color: #ff8ae2;
  }

  li {
    margin-left: 10px;
  }

  a {
    text-decoration: underline;
    text-decoration-color: #ff8ae2;
  }
}
</style>
