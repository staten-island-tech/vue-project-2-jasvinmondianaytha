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
import { useGenerateStore } from "../stores/generate-mon";
import InnerSafari from "../components/InnerSafari.vue";
import MessageLog from "../components/MessageLog.vue";

export default {
    setup() {
        const genStore = useGenerateStore();
        genStore.setMon();
    },
    components: { InnerSafari, MessageLog }
}
</script>