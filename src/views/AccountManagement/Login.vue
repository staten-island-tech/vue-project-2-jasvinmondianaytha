<template>
<div class="form-wrapper">
  <h3>Login</h3>
  <form @submit.prevent="handleSubmit" class="block-container">
    <div class="block-body">
      <dl class="form-row">
        <dt>
          <div class="label-wrapper">
            <label for="email">Email: </label>
          </div>
        </dt>
        <dd>
          <input class="input" type="email" name="email" v-model="email" required />
        </dd>
      </dl>
      <dl class="form-row">
        <dt>
          <div class="label-wrapper">
            <label for="password">Password: </label>
          </div>
        </dt>
        <dd>
          <input class="input" type="password" name="password" v-model="password" required />
        </dd>
      </dl>
    </div>
    <dl class="form-row form-submit-row">
      <dd>
        <div class="form-submit-row-main">
          <div class="form-submit-row-controls">
          <button class="button"><span class="button-text">LOG IN</span></button>
          <div v-if="error">{{ error }}</div>
        </div>
        </div>
      </dd>
    </dl>
  </form>
</div>
</template>

<style scoped>
h3 {
  font-size: 2rem;
}
.form-wrapper {
  margin: auto;
  width: 80%
}
.block-container {
  border: 1px solid;
  border-color: var(--light-blue);
  padding: 1rem;
  padding-bottom: 0;
}
.form-row {
  display: table;
  table-layout: fixed;
  width: 100%;
  margin: 0;
  position: relative;
}
.label-wrapper {
  transform: translateY(7px);
}
.label-wrapper label {
  font-size: 1.5rem;
}
.form-row dt {
  padding-top: 2.4rem;
  border-right: 1px solid;
  border-color: var(--light-blue);
  text-align: right;
  width: 33%;
  padding: 15px 10px 15px 10px;
}
.form-row dd {
  width: 67%;
  padding: 15px 10px 15px 10px;
}
.form-row dd, .form-row dt {
  display: table-cell;
  vertical-align: top;
}
.input {
  color: white;
  background: var(--dark-blue);
  border: 1px solid;
  border-color: var(--light-blue);
  padding: 0.8rem;
  display: block;
  width: 100%;
  line-height: 1.3;
  text-align: left;
  word-wrap: break-word;
  font-family: monospace;
  font-size: 1.5rem;
}
.form-submit-row {
  position: relative;
}
.form-submit-row dd {
  border-top: 1px solid;
  border-color: var(--light-blue);
}
.form-submit-row-main {
  position: relative;
}
.form-submit-row-controls {
  position: relative;
  padding-left: 33%;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-left: 10px;
  margin-right: 10px; 
}
.button {
  border: 1px solid;
  border-color: var(--light-blue);
  color: var(--light-blue);
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  text-align: center;
}
.button-text {
  font-size: 1.3rem;
}
.button:hover {
  background-color: var(--light-blue);
  color: white;
}
</style>

<script>
import { useFirebaseStore } from "@/stores/firebase-store.js";
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