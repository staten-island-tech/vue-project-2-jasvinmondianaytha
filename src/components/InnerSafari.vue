<template>
  <div class="inner">
    <CatchCard :name="genStore.pokemon.species" :sprite="genStore.pokemon.sprite"></CatchCard>
  <div class="buttons">
    <button @click="catchStore.catchHandler()">Throw Ball</button>
    <button @click="catchStore.throwRock()">Throw Rock</button>
    <button @click="catchStore.throwBait()">Throw Bait</button>
    <button @click="catchStore.runAway()">Run Away</button>
  </div>
  </div>
</template>

<script>
import { useGenerateStore } from "@/stores/generate-mon";
import { useCatchStore } from "@/stores/catch-manager";
import CatchCard from "@/components/CatchCard.vue";

export default {
  setup() {
    const genStore = useGenerateStore();
    const catchStore = useCatchStore();
    return { genStore, catchStore }
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