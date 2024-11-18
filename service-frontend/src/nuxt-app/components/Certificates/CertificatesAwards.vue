<template>
  <div>
    <h1>Certificate Awards</h1>
    <ul>
      <li
        v-for="award in awardsList"
        :key="award.id"
      >
        <a
          :href="award.websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="award-item">
            <img
              v-if="award.screenshot"
              :src="`/images/${award.screenshot}`"
              :alt="award.id"
              class="award-screenshot"
            />
            <div>
              <p>
                <strong>{{ award.id }}</strong>
              </p>
              <p>{{ formatDate(award.date) }}</p>
              <p>{{ award.description }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { awards } from "~/data/certificates-awards";
import type { Award } from "~/models/award";

export default defineComponent({
  name: "CertificateAwards",
  data() {
    return {
      awardsList: Object.values(awards) as Award[],
    };
  },
  methods: {
    formatDate(date: Date): string {
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
});
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

.award-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.award-screenshot {
  width: 100px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

p {
  margin: 0.2rem 0;
}
</style>
