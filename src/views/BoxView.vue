<template>
  <div>
    <table class="box">
      <tr>
        <th>Image</th>
        <th>Species</th>
        <th>Gender</th>
        <th>Nature</th>
      </tr>
      <BoxEntry v-for="(mon, id) in store.box" :id="id" :mon="mon" :key="mon.uuid"/>
    </table>
    <DetailCard v-if="store.selectedMon !== null"/>
  </div>
</template>

<script>
import { useBoxStore } from "../stores/box-store";
import CatchCard from "../components/CatchCard.vue";
import BoxEntry from "../components/BoxEntry.vue";
import DetailCard from "../components/DetailCard.vue";

export default {
    setup() {
        const store = useBoxStore();
        store.applyDecs();
        // setInterval(store.applyDecs, 20000)
        return { store };
    },
    components: { CatchCard, BoxEntry, DetailCard },
}
</script>

<style scoped>
.box {
  margin: auto;
  border: 1px solid;
  background-color: var(--dark-blue);
}
.box th {
  border: 1px solid;
  font-size: 1.5rem;
  padding: 0.5rem;
}
</style>
