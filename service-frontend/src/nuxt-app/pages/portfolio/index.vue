<script setup lang="ts">
import { usePortfolio } from "~/composables/usePortfolio";
import { onMounted, ref } from "vue";

const portfolio = usePortfolio();
const portfolioCards = ref<HTMLDivElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          card.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  portfolioCards.value.forEach((card) => observer.observe(card));
});
</script>

<style src="./portfolio-list.scss" />
<template>
  <div class="portfolio-container">
    <div class="grid">
      <div
        v-for="(item, index) in portfolio"
        :key="item.slug"
        class="portfolio-card"
        ref="portfolioCards"
        :style="{ transitionDelay: `${0.2 + Math.random() * 0.8}s` }"
      >
        <a
          :href="`/portfolio/${item.slug}`"
          class="card-content"
        >
          <img
            v-if="item.subDirPathName"
            :src="`/portfolio-images/screenshots/${item.subDirPathName}/hero-ai.jpg`"
            alt="Project thumbnail"
            class="thumbnail"
          />
          <h2>{{ item.name }}</h2>
          <p class="category-tag-wrapper">
            <span
              v-for="category in item.categoriesProjectType"
              :key="category.id"
              class="category-tag"
            >
              {{ category.name }}
            </span>
          </p>
          <p class="description">
            {{ item.shortDescription }}
          </p>
          <div class="tech-stack">
            <span
              v-for="tech in item.techs"
              :key="tech.id"
              :title="tech.name"
              class="tech-icon"
            >
              <img
                :src="`/portfolio-images/tech-logos/${tech.icon}`"
                :alt="tech.name"
              />
            </span>
          </div>
          <button class="view-more">Read More</button>
        </a>
      </div>
    </div>
  </div>
</template>
