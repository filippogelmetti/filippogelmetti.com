<template>
  <div>
    <header>
      <NuxtLink :to="`/`"> HOME </NuxtLink>
      <NuxtLink :to="`/portfolio`"> PORTFOLIO </NuxtLink>
      <NuxtLink :to="`/about`"> ABOUT </NuxtLink>
    </header>

    <NuxtPage />

    <footer>
      <p>&copy; 2024 My Shop</p>
    </footer>
  </div>
</template>

<style scoped src="./default.scss" />
