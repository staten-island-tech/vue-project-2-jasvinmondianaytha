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
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
