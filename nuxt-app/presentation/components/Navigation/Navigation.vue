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
        :to="`/services`"
        active-class="active-nav-tab"
      >
        SERVICES
      </NuxtLink>
    </div>
    <div class="nav-tab">
      <NuxtLink
        :to="`/clients`"
        active-class="active-nav-tab"
      >
        CLIENTS
      </NuxtLink>
    </div>
    <div class="nav-tab">
      <NuxtLink
        :to="`/honors`"
        active-class="active-nav-tab"
      >
        HONORS
      </NuxtLink>
    </div>
    <div class="nav-tab">
      <NuxtLink
        :to="`/blog`"
        active-class="active-nav-tab"
      >
        BLOG
      </NuxtLink>
    </div>
    <div class="nav-tab">
      <NuxtLink
        :to="`/contact`"
        active-class="active-nav-tab"
      >
        CONTACT
      </NuxtLink>
    </div>
  </header>
</template>
