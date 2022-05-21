<template>
  <nav>
    <span>[ </span>
    <RouterLink to="/">Home</RouterLink><span> | </span>
    <RouterLink to="/about">About</RouterLink><span> | </span>
    <RouterLink to="/safari">Safari</RouterLink><span> | </span>
    <RouterLink to="/box">Box</RouterLink>
    <span> ]</span>
  </nav>
</template>

<style scoped>
nav {
  margin: auto;
  text-align: center;
}
nav * {
  font-size: 1.5rem;
}
</style>