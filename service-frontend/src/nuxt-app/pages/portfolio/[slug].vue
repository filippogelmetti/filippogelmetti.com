<template>
  <div v-if="portfolioItem">
    <h1>{{ portfolioItem.name }}</h1>
    <p
      v-for="desc in portfolioItem.description"
      :key="desc"
    >
      {{ desc }}
    </p>
    <!-- More fields displayed here -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { usePortfolio } from "~/composables/usePortfolio";

const route = useRoute();
const portfolio = usePortfolio();
const portfolioItem = portfolio.find((item) => item.slug === route.params.slug);

console.log("Route slug:", route.params.slug);
console.log("Portfolio Item:", portfolioItem);
</script>
