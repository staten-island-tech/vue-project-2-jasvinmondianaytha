<template>
  <div class="pokemon-card">
    <h1 class="pokemon-name">{{ name }}</h1>
    <h2 class="pokemon-type">
      <img
        :src="
          'https://play.pokemonshowdown.com/sprites/types/' + type1 + '.png'
        "
        :alt="type1"
        class="type"
      />
      <img
        :src="
          'https://play.pokemonshowdown.com/sprites/types/' + type2 + '.png'
        "
        :alt="type2"
        v-if="type2"
        class="type"
      />
    </h2>
    <img :src="sprite" class="pokemon-sprite" />

    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    type1: String,
    type2: String,
    sprite: String,
  },
};
</script>

<style scoped>
.pokemon-card {
  margin: 1rem;
  border-style: groove;
}

.pokemon-sprite {
  width: 100px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.type {
  padding: 0.3rem;
}
</style>
