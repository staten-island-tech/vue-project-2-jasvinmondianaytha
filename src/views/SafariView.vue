<template>
<div class="safari">
  <InnerSafari/>
  <MessageLog class="msg"/>
</div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .safari {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1023px) {
  .msg {
    margin: auto;
    margin-top: 1rem;
  }
}
</style>

<script>
import { useMessageStore } from "../stores/message-log";
import { useGenerateStore } from "../stores/generate-mon";
import InnerSafari from "../components/InnerSafari.vue";
import MessageLog from "../components/MessageLog.vue";

export default {
    setup() {
        const genStore = useGenerateStore();
        useMessageStore().clearMessages();
        genStore.setMon();
    },
    components: { InnerSafari, MessageLog }
}
</script>