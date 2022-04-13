<template>
  <div class="pokebox">
    <DexCard
      v-for="gen1mon in gen1mons"
      :key="gen1mon"
      :name="gen1mon.name.english"
      :id="gen1mon.id"
      :sprite="gen1mon.sprite"
    ></DexCard>
  </div>
</template>

<script>
import DexCard from "./DexCard.vue";
import pokemons from "../assets/pokemon.json";
export default {
  setup() {
    return pokemons;
  },
  components: { DexCard },
  data() {
    const gen1mons = this.pokemons.filter((pokemon) => pokemon.id < 152);
    console.log(gen1mons);
    return {
      gen: null,
      gen1mons,
    };
  },
};
</script>

<style></style>
