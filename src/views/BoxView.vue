<template>
  <div class="box">
    <CatchCard v-for="mon in store.box" :name="mon.species" :sprite="mon.sprite" :key="mon.uuid"/>
  </div>
</template>

<script>
import { useBoxStore } from "../stores/box-store";
import CatchCard from "../components/CatchCard.vue";
export default {
    setup() {
        const store = useBoxStore();
        return { store };
    },
    components: { CatchCard }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

}
</style>
