<template>
  <section class="clients-wrapper">
    <div class="container">
      <h1 class="title">Clients I've Delivered Work For</h1>
      <div class="clients-grid">
        <div
          v-for="(client, index) in clientList"
          :key="client.id"
          class="client-tile"
          :style="{ '--delay': `${(index % 5) * 0.2}s` }"
          ref="clientTiles"
        >
          <a
            :href="client.websiteUrl || '#'"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="`/portfolio-images/clients-logos/${client.logo}`"
              :alt="client.name"
              class="client-logo"
            />
            <p class="client-name">{{ client.name }}</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clients } from "~/data/clients";

// Prepare the client list for use
const clientList = Object.values(clients);

// Set up intersection observer for animations
const clientTiles = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  clientTiles.value.forEach((tile) => observer.observe(tile));
});
</script>

<style>
.clients-wrapper {
  background: #f9f9f9;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  font-weight: bold;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Ensure exactly 4 columns */
  gap: 20px; /* Adjust spacing between grid items */
}

.client-tile {
  display: flex; /* Use flexbox for vertical centering */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Horizontally center content */
  justify-content: center; /* Vertically center content */
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: var(--delay);
}

.client-tile.visible {
  opacity: 1;
  transform: translateY(0);
}

.client-tile a {
  text-decoration: none;
  display: block;
  text-align: center;
}

.client-logo {
  width: 100%;
  height: auto;
  max-width: 200px;
  margin: 0 auto;
  display: block;
}

.client-name {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
</style>
