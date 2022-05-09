<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>
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
import { ref } from "vue";
import { useFirebaseStore } from "@/stores/firebase-manager";
import { useRouter } from "vue-router";

export default {
    setup() {
        const store = useFirebaseStore();
        const email = ref("");
        const password = ref("");
        const error = ref(null);
        const router = useRouter();
        const handleSubmit = async () => {
            try {
                await store.signup(email, password)
            } catch (err) {
                error.value = err.message;
            }
        }
        return {
            handleSubmit, email, password, error
        }
    }
}
</script>