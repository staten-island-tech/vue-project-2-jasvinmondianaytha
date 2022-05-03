<template>
  <div>
    <h1>Catch some of these hands</h1>
    <Catch-Card />
    <h2>{{ store.getRandomId }}</h2>
    <button @click="handleClick">Catch it</button>
  </div>
</template>

<script>
import { useCatchEm } from "../stores/ash-catch-em";
import CatchCard from "../components/Catch-Card.vue";
export default {
  setup() {
    const store = useCatchEm();
    const handleClick = async () => {
      try {
        await store.catch;
      } catch {}
    };
    return { store, handleClick };
  },
  components: {
    CatchCard,
  },
};
</script>

<style></style>
