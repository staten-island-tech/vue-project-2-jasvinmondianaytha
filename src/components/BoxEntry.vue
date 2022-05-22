<template>
  <tr>
    <td><img :src="mon.sprite" alt=""></td>
    <td>{{mon.species}}</td>
    <td>
      <div class="gender" id="male" v-if="mon.gender == 'M'">♂</div>
      <div class="gender" id="female" v-else-if="mon.gender == 'F'">♀</div>
      <div class="gender" id="neutral" v-else>⚲</div>
    </td>
    <td>{{mon.nature}}</td>
    <td><a class="detail" @click="monStore.setMon(mon.id)">Details</a></td>
  </tr>  
</template>

<script>
import {useMonStore} from "@/stores/mon-store";

export default {
  setup() {
    const monStore = useMonStore();
    return {monStore}
  },
  props: {
    mon: Object
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
</style>