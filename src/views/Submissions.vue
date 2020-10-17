<template>
  <div class="submissions">
    <div class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container is-max-widescreen">
          <h1 class="title is-2 has-text-centered">Module Submissions</h1>
        </div>
      </div>
    </div>
    <div class="hero is-dark">
      <div class="hero-body">
        <div class="container is-max-widescreen" v-if="!loading">
          <div class="entry" v-for="entry in registry" :key="entry.name">
            <a
              class="subtitle is-5 has-text-white has-text-jetbrains"
              :href="`https://nest.land/package/${entry.nestdotland}`"
            >
              {{ entry.name }}
            </a>
            <p class="light-grey-text">
              {{ entry.description }}
            </p>
            <p class="has-text-jetbrains">
              <a
                class="has-text-white"
                :href="`https://github.com/${entry.author.name}`"
              >
                @{{ entry.author.name }}
              </a>
              <span class="grey-text">
                published v{{ entry.version }} • {{ entry.time }} ago
              </span>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registry from "../../registry.json";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export default {
  name: "Submissions",
  data() {
    return {
      registry,
      loading: true,
    };
  },
  async created() {
    await this.getDescriptions();
  },
  methods: {
    async getDescriptions() {
      for (let i = 0; i < registry.length; i++) {
        const res = await fetch(
          `https://x.nest.land/api/package/${registry[i].name}`
        );
        const json = await res.clone().json();

        this.registry[i].description = json.description;

        this.registry[i].version = json.latestVersion.split("@")[1];

        const now = dayjs();
        const then = dayjs(json.updatedAt);
        this.registry[i].time = dayjs.duration(now.diff(then)).humanize();
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: JetBrainsMono;
  src: url("https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf")
      format("truetype");
}

.submissions {
  .has-text-jetbrains {
    font-family: JetBrainsMono;
  }

  hr {
    height: 1px;
    background-color: rgba(2555, 2555, 255, 0.5);
  }

  .grey-text {
    color: #9e9e9e;
  }

  .light-grey-text {
    color: #bdbdbd;
  }
}
</style>
