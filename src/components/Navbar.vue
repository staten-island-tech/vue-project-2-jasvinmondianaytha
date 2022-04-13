<script>
import { RouterLink } from "vue-router";
import { useFirebaseStore } from "../stores/firebase-manager.js";

export default {
  setup() {
    const store = useFirebaseStore()
    const handleLogout = async () => {
      try {
        await store.logout()
      } catch (err) {
        console.log(err)
      }
    }
    return {
      store, handleLogout
    }
  },
  components: {
    RouterLink
  }
}
</script>

<template>
  <div class="navbar">
    <div class="nav-container">
      <h1 class="nav-logo-wrapper">
        <RouterLink to="/"><img src="@/assets/battler.png" alt="" class="nav-image" width="180" /></RouterLink>
      </h1>
      <div class="nav-menu">
        <div class="nav-link-wrapper">
          <div class="nav-link">
            <RouterLink to="/">HOME</RouterLink>
          </div>
        </div>
        <div class="nav-link-wrapper">
          <div class="nav-link">
            <RouterLink to="/about">ABOUT</RouterLink>
          </div>
        </div>
        <div class="nav-link-wrapper">
          <div class="nav-link">
            <RouterLink to="/pokedex">POKÉDEX</RouterLink>
          </div>
        </div>
        <div class="nav-link-wrapper" v-if="!store.user">
          <div class="nav-link">
            <RouterLink to="/login">LOGIN</RouterLink>
          </div>
        </div>
        <div class="nav-link-wrapper" v-if="!store.user">
          <div class="nav-link">
            <RouterLink to="/signup">SIGN UP</RouterLink>
          </div>
        </div>
        <div class="nav-link-wrapper" v-if="store.user">
          <div class="nav-link">
            <a class="logout" @click="handleLogout()">LOG OUT</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  padding: 2.5rem;
  padding-right: 5%;
  padding-left: 5%;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  background-color: aliceblue;
}

.nav-logo-wrapper {
  margin-bottom: 1rem;
}

.nav-container {
  display: flex;
  margin-right: 0;
  margin-left: 0;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid var(--yellow);
  letter-spacing: 0.125rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.nav-link-wrapper {
  display: inline-block;
  margin-right: 0.7rem;
  margin-bottom: -0.2rem;
  margin-left: 0.7rem;
}

.nav-link {
  text-transform: uppercase;
  padding: 1.5rem 1rem 1rem;
  border-bottom: 0.3rem solid transparent;
}

.nav-link a {
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease-out;
}

.nav-link *:hover {
  color: purple;
}

.logout {
  cursor: pointer;
}
</style>
