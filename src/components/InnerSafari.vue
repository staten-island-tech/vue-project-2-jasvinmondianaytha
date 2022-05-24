<template>
  <div class="inner">
    <CatchCard :name="store.pokemon.name" :sprite="store.pokemon.sprite"></CatchCard>
  <div class="buttons">
    <button @click="store.catchHandler()">Throw Ball</button>
    <button @click="store.throwRock()">Throw Rock</button>
    <button @click="store.throwBait()">Throw Bait</button>
    <button @click="store.runAway()">Run Away</button>
  </div>
  </div>
</template>

<script>
import CatchCard from "@/components/CatchCard.vue";
import { useCatchStore } from "../stores/catch-manager";

export default {
  setup() {
    const store = useCatchStore()
    store.genPokemon()
    return {store}
  },
  components: {
    CatchCard
  }
}
</script>

<style scoped>
.inner {
  border: 1px solid;
  padding: 1rem;
  border-color: var(--light-blue);
}
.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem;
  text-align: center;
  width: fit-content;
}
@media (max-width: 1024px) {
  .buttons {
    margin:auto;
    margin-top: 1rem
  }
}
.buttons button {
  border: 1px solid;
  border-color: var(--light-blue);
  color: var(--light-blue);
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  text-align: center;
  font-size: 1.3rem;
}
.buttons button:hover {
  background-color: var(--light-blue);
  color: white;
}
</style>