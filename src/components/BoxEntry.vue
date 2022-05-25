<template>
  <tr>
    <td><img :src="mon.sprite" :alt="mon.species + 'in box'"></td>
    <td>{{mon.species}}</td>
    <td class="gend">
      <div class="gender" id="male" v-if="mon.gender == 'M'">♂</div>
      <div class="gender" id="female" v-else-if="mon.gender == 'F'">♀</div>
      <div class="gender" id="neutral" v-else>⚲</div>
    </td>
    <td class="nat">{{mon.nature}}</td>
    <td><a class="detail" @click="store.setMon(id)">Details</a></td>
  </tr>  
</template>

<script>
import { useBoxStore } from "../stores/box-store";

export default {
  setup() {
    const store = useBoxStore();
    return {store}
  },
  props: {
    mon: Object,
    id: Number
  },
}
</script>

<style scoped>
tr, td {
  border: 1px solid;
  font-size: 1.5rem;
  text-align: center;
}
.gender {
  font-size: 1.9rem;
}
#male {
  color: aqua;
}
#female {
  color: pink;
}
.detail {
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.4rem;
}
.detail:hover {
  color: var(--light-blue)
}
.attr th {
  border: 1px solid;
}
@media (max-width: 415px) {
  .gend, .nat {
    display: none;
  }
}
</style>