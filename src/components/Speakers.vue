<template>
  <div class="speakers">
    <div class="hero is-medium is-dark">
      <div class="hero-body">
        <div class="container is-max-widescreen">
          <h2 class="title">Speakers</h2>
          <div class="columns">
            <div class="column">
              <div class="card is-dark">
                <figure class="speaker image">
                  <img src="../assets/people/ryan.jpg" alt="Ryan in 2020">
                </figure>
                <div class="card-content has-text-left">
                  <p class="title is-4">Ryan Dahl</p>
                  <p class="subtitle is-6">@ry <span class="has-text-pink">|</span> Deno</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-dark">
                <figure class="speaker image">
                  <img src="../assets/people/sam.png" alt="Sam">
                </figure>
                <div class="card-content has-text-left">
                  <p class="title is-4">Sam Williams</p>
                  <p class="subtitle is-6">@samcwilliams <span class="has-text-pink">|</span> Arweave</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-dark">
                <figure class="speaker image">
                  <img src="../assets/logos/p2p.jpg" alt="P2P Enterprise Logo">
                </figure>
                <div class="card-content has-text-left">
                  <p class="title is-4">Michael Spengler</p>
                  <p class="subtitle is-6">@michael-spengler <span class="has-text-pink">|</span> SAP</p>
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
  name: "Speakers",
}
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
        }
      }
    }

    .has-text-pink {
      color: #FF8AE2;
    }
  }
</style>