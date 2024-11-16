<style src="./navigation.scss" />

<template>
  <header class="navigation">
    <div class="nav-tab">
      <NuxtLink
        :to="`/`"
        exact-active-class="active-nav-tab"
      >
        HOME
      </NuxtLink>
    </div>
    <div class="nav-tab">
      <NuxtLink
        :to="`/portfolio`"
        active-class="active-nav-tab"
      >
        PORTFOLIO
      </NuxtLink>
    </div>
    <div class="nav-tab">
      <NuxtLink
        :to="`/about`"
        active-class="active-nav-tab"
      >
        ABOUT
      </NuxtLink>
    </div>
  </header>
</template>
