<template>
<div class="safari">
  <div class="inner">
    <CatchCard :name="genStore.pokemon.species" :sprite="genStore.pokemon.sprite"></CatchCard>
  <div class="buttons">
    <button @click="catchStore.catchHandler()">Throw Ball</button>
    <button @click="catchStore.applyStatus('major')">Apply Freeze</button>
    <button @click="catchStore.applyStatus('minor')">Apply Paralyze</button>
    <select v-model="catchStore.selectedBall">
    <option :value="ball.id" v-for="ball in balls" :key="ball.id">{{ball["name"]}}</option>
    </select>
    {{catchStore.selectedBall}}
  </div>
  </div>
</div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .safari {
    min-height: 85vh;
    display: flex;
    align-items: center;
  }
}
.buttons {
  margin: auto;
  margin-top: 1rem;
  width: fit-content;
  padding: 1rem;
  border: 1px solid;
  border-color: #58a3ff;
  background-color: #151c47;
}
.inner {
  margin: auto;
}
</style>

<script>
import { useGenerateStore } from "../stores/generate-mon";
import { balls } from "@/assets/json/balls.json"
import { useCatchStore } from "../stores/catch-manager";
import CatchCard from "../components/CatchCard.vue";

export default {
    setup() {
        const genStore = useGenerateStore();
        const catchStore = useCatchStore();
        genStore.setMon();
        
        return { genStore, balls, catchStore };
    },
    components: { CatchCard }
}
</script>