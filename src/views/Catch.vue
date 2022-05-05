<template>
  <div>
    <h1>Catch some of these hands</h1>
    <Catch-Card
      :name="randMon.name.english"
      :type1="randMon.type[0]"
      :type2="randMon.type[1]"
      :sprite="randMon.sprite"
    />
    <button @click="catchStore.catch">Catch it</button>
    <button @click="catchStore.pokeball">Catch it</button>
  </div>
</template>

<script>
import { useCatchEm } from "../stores/ash-catch-em";
import { usePokedexStore } from "../stores/pokedex";
import CatchCard from "../components/Catch-Card.vue";
export default {
  setup() {
    const pokedexStore = usePokedexStore();
    const catchStore = useCatchEm();
    const randMon = pokedexStore.getRandPoke;
    catchStore.setMon(randMon);
    return { pokedexStore, randMon, catchStore };
  },
  components: {
    CatchCard,
  },
};
</script>

<style></style>
