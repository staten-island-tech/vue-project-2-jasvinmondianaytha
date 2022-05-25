<template>
  <div class="modal-container">
      <div class="modal-top-bar">
        <div class="pkmn-name">{{store.box[store.selectedMon].species}}</div>
        <div class="close-btn" @click="store.clearMon()">✖</div>
      </div>
      <div class="modal-content">
        <InnerDetailCard :mon="store.box[store.selectedMon]" :id="store.selectedMon"/>
      </div>
    </div>
  <div class="modal-mask" @click="store.clearMon()">
  </div>
</template>

<script>
import { useBoxStore } from "../stores/box-store";
import InnerDetailCard from "./InnerDetailCard.vue";
import { useFirebaseStore } from "../stores/firebase-store";

export default {
    setup() {
        const store = useBoxStore();
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
  left: calc(50% - 30rem);
  width: 60rem;
  height: 45rem;
  border: 1px solid;
  border-color: var(--light-blue);
}
.modal-top-bar {
  border: 1px solid;
  margin: 0.3rem;
  border-color: var(--light-blue);
  padding-left: 3px;
  display: flex;
  background-color: var(--mid-blue);
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
  height: 93.5%;
  padding: 0.5rem;
}
@media (max-width: 595px) {
  .modal-container {
    width: 98%;
    height: 98%;
    left: calc(50% - 49%);
    top: calc(50% - 49%);
  }
}
</style>