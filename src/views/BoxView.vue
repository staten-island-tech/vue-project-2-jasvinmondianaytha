<template>
  <div>
    <table class="box">
      <tr>
        <th>Image</th>
        <th>Species</th>
        <th>Gender</th>
        <th>Nature</th>
      </tr>
      <BoxEntry v-for="mon in store.box" :mon="mon" :key="mon.uuid"/>
    </table>
    <DetailCard v-if="monStore.pokemon"/>
  </div>
</template>

<script>
import { useBoxStore } from "../stores/box-store";
import CatchCard from "../components/CatchCard.vue";
import BoxEntry from "../components/BoxEntry.vue";
import DetailCard from "../components/DetailCard.vue";
import {useMonStore} from "@/stores/mon-store";

export default {
    setup() {
        const store = useBoxStore();
        const monStore = useMonStore();
        store.applyDecs();
        setInterval(store.applyDecs, 10000)
        return { store, monStore };
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
