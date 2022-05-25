<template>
  <div class="message-log">
    <div v-for="mes in store.messages" :key="mes.time">
    <span class="time">{{mes.time}}</span>
    <span class="mess">{{mes.message}}</span>
    </div>
  </div>
</template>

<style scoped>
.message-log {
  margin: 1rem;
  width: 40.8rem;
  height: 30.6rem;
  overflow-y: scroll;
  background-color: var(--mid-blue);
  padding: 0.5rem;
  display: flex;
  flex-direction: column-reverse;
}
.message-log * {
  font-family: monospace;
  font-size: 1.4rem;
}
.time {
  margin-right: 1rem;
  color: rgb(236, 197, 122)
}
@media (max-width: 551px) {
  .message-log {
    width: 100%;
  }
}
</style>

<script>
import { useMessageStore } from "../stores/message-log";

export default {
  setup() {
    const store = useMessageStore();
    return {store};
  }
}
</script>