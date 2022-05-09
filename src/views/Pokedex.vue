<template>
  <div class="selections">
    <p class="sel" id="0" @click="store.setGen(0)">All</p>
    <p class="sel" v-for="n in 8" :key="n" :id="n" @click="store.setGen(n)">
      {{ n }}
    </p>
  </div>
  <div class="pokedex">
    <DexCard
      v-for="pokemon in store.gen"
      :key="pokemon.name"
      :id="pokemon.id"
      :name="pokemon.name.english"
      :type1="pokemon.type[0]"
      :type2="pokemon.type[1]"
      :sprite="pokemon.sprite"
    />
  </div>
</template>

<script>
import { usePokedexStore } from "@/stores/pokedex.js";
import DexCard from "../components/DexCard.vue";
export default {
  setup() {
    const store = usePokedexStore();
    return { store };
  },
  components: {
    DexCard,
  },
};
</script>

<style scoped>
.pokedex {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
}
</style>
