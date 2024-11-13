<template>
  <div class="portfolio-container">
    <h1>Portfolio Projects</h1>
    <div class="grid">
      <div
        v-for="item in portfolio"
        :key="item.slug"
        class="portfolio-card"
      >
        <nuxt-link
          :to="`/portfolio/${item.slug}`"
          class="card-content"
        >
          <img
            v-if="item.subDirPathName"
            :src="`/portfolio-images/screenshots/${item.subDirPathName}/hero-ai.jpg`"
            alt="Project thumbnail"
            class="thumbnail"
          />
          <h2>{{ item.name }}</h2>
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
          <button class="view-more">View More</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolio } from "~/composables/usePortfolio";

const portfolio = usePortfolio();
</script>

<style src="./portfolio-list.scss" />
