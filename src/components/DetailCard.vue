<template>
  <div class="modal-container">
      <div class="modal-top-bar">
        <div class="pkmn-name">{{store.pokemon.species}}</div>
        <div class="close-btn" @click="store.clearMon()">✖</div>
      </div>
      <div class="modal-content">
        <InnerDetailCard :mon="store.pokemon"/>
        <button @click="store.dec(firebaseStore.user.uid)">DEC</button>
        <button @click="firebaseStore.saveData()">SAVE</button>
      </div>
    </div>
  <div class="modal-mask" @click="store.clearMon()">
  </div>
</template>

<script>
import { useMonStore } from "../stores/mon-store";
import InnerDetailCard from "./InnerDetailCard.vue";
import { useFirebaseStore } from "../stores/firebase-store";

export default {
    setup() {
        const store = useMonStore();
        const firebaseStore = useFirebaseStore();
        return { store, firebaseStore };
    },
    components: { InnerDetailCard }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}
.modal-container {
  position: fixed;
  z-index: 2;
  background-color: var(--dark-blue);
  top: calc(50% - 30rem);
  left: calc(50% - 40rem);
  width: 80rem;
  height: 60rem;
  border: 1px solid;
  border-color: var(--light-blue);
}
.modal-top-bar {
  border: 1px solid;
  margin: 0.3rem;
  border-color: var(--light-blue);
  padding-left: 3px;
  display: flex;
}
.pkmn-name {
  margin-right: auto;
  font-size: 1.2rem;
}
.close-btn {
  position: relative;
  top: 2px;
  right: 3px;
  cursor: pointer;
}
.close-btn:hover {
  color: var(--light-blue);
}
.modal-content {
  border: 1px solid;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
  border-color: var(--light-blue);
  height: 95%;
  padding: 0.3rem;
}
</style>