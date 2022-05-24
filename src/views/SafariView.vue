<template>
<div class="safari">
  <InnerSafari/>
  <MessageLog/>
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

</style>

<script>
import { useMessageStore } from "../stores/message-log";
import InnerSafari from "../components/InnerSafari.vue";
import MessageLog from "../components/MessageLog.vue";

export default {
    setup() {
        useMessageStore().clearMessages();
    },
    components: { InnerSafari, MessageLog }
}
</script>