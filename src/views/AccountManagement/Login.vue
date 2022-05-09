<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <div>
      <label for="email">Email: </label>
      <input type="email" name="email" v-model="email" required />
    </div>
    <div>
      <label for="email">Password: </label>
      <input type="password" name="password" v-model="password" required />
    </div>
    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { useFirebaseStore } from "@/stores/firebase-manager.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("")
    const password = ref("")
    const error = ref(null)
    const store = useFirebaseStore()
    const router = useRouter()
    const handleSubmit = async () => {
      try {
        await store.login(email.value, password.value)
        router.push("/")
      } catch (err) {
        error.value = err.message
      }
    }
    return {
      handleSubmit, email, password, error
    }
  }
}
</script>
