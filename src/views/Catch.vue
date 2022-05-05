<template>
  <div>
    <h1>Catch some of these hands</h1>
    <Catch-Card :name="randMon.name.english" :type1="randMon.type[0]" :type2="randMon.type[1]"
      :sprite="randMon.sprite" />
    <button @click="catchStore.catch()">Catch it</button>
    <select v-model="catchStore.pokeball">
      <option v-for="ball in balls"> {{ ball.name }}</option>
    </select>
  </div>
</template>

<script>
import { useCatchEm } from "../stores/ash-catch-em";
import { usePokedexStore } from "../stores/pokedex";
import CatchCard from "../components/Catch-Card.vue";
import { balls } from "@/assets/balls.json";
export default {
  setup() {
    const pokedexStore = usePokedexStore();
    const catchStore = useCatchEm();
    const randMon = pokedexStore.getRandPoke;
    catchStore.setMon(randMon);
    return { pokedexStore, randMon, catchStore, balls };
  },
  components: {
    CatchCard,
  },
};
</script>

<style>
</style>
