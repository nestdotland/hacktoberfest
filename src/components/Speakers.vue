<template>
  <div class="speakers">
    <div class="hero is-small is-dark">
      <div class="hero-body">
        <div class="container is-max-widescreen">
          <h2 class="title">Speakers</h2>
          <div class="columns">
            <div class="column">
              <div class="card is-dark">
                <figure class="speaker image">
                  <img
                    src="../assets/people/ryan.jpg"
                    alt="Ryan in 2020"
                    id="ryan"
                  />
                </figure>
                <div class="card-content has-text-left">
                  <p class="title is-4">Ryan Dahl</p>
                  <p class="subtitle is-6 has-text-white">
                    <a href="https://github.com/ry">@ry</a>
                    <span class="has-text-pink">&nbsp;|&nbsp;</span>
                    <a class="company" href="https://deno.land">Deno</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-dark">
                <figure class="speaker image">
                  <img src="../assets/people/sam.png" alt="Sam" />
                </figure>
                <div class="card-content has-text-left">
                  <p class="title is-4">Sam Williams</p>
                  <p class="subtitle is-6 has-text-white">
                    <a href="https://github.com/samcamwilliams"
                      >@samcamwilliams</a
                    >
                    <span class="has-text-pink">&nbsp;|&nbsp;</span>
                    <a class="company" href="https://arweave.org">Arweave</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-dark">
                <figure class="speaker image">
                  <img
                    src="../assets/logos/p2p.jpg"
                    alt="P2P Enterprise Logo"
                    id="michael"
                  />
                </figure>
                <div class="card-content has-text-left">
                  <p class="title is-4">Michael Spengler</p>
                  <p class="subtitle is-6 has-text-white">
                    <a href="https://github.com/michael-spengler"
                      >@michael-spengler</a
                    >
                    <span class="has-text-pink">&nbsp;|&nbsp;</span>
                    <a class="company" href="https://sap.com">SAP</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Speakers"
};
</script>

<style lang="scss">
.speakers {
  .card {
    background: #414141;
    border-radius: 20px;

    .speaker {
      padding: 25px 25px 0 25px;

      img {
        border-radius: 20px;

        &#ryan,
        &#michael {
          filter: grayscale(1);
        }
      }
    }

    a.company {
      font-weight: 500;
    }
  }

  .has-text-pink {
    color: #ff8ae2;
  }
}
</style>
