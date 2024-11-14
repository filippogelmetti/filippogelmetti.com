<script setup lang="ts">
import { useRoute } from "vue-router";
import { usePortfolio } from "~/composables/usePortfolio";

const route = useRoute();
const portfolio = usePortfolio();
const portfolioItem = portfolio.find((item) => item.slug === route.params.slug);
</script>

<style src="./portfolio-item.scss" />
<template>
  <div
    v-if="portfolioItem"
    class="portfolio-item"
  >
    <div class="project-wrapper">
      <div class="layout-left-65-right-35-container layer-top">
        <div class="col-left">
          <div class="title-bar-container">
            <div
              class="title-area-container padded-default-left"
              :style="{
                backgroundImage: `url('/portfolio-images/screenshots/${portfolioItem.subDirPathName}/hero-ai.jpg')`,
              }"
            ></div>
            <div class="to-bottom-container padded-default-left">
              <div class="label">Project</div>
              <h1>{{ portfolioItem.name }}</h1>
            </div>
            <div class="tech-icons-container padded-default-left">
              <div class="label-stack">PROJECT STACK</div>
              <div class="container-stack">
                <div
                  v-for="tech in portfolioItem.techs"
                  :title="tech.name"
                  class="tech-icon-wrapper"
                >
                  <img
                    :src="`/portfolio-images/tech-logos/${tech.icon}`"
                    :alt="tech.name"
                    width="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-right">
          <div class="trans-overlay">
            <div
              class="hero-image"
              :style="{
                backgroundImage: `url('/portfolio-images/screenshots/${portfolioItem.subDirPathName}/hero-ai.jpg')`,
              }"
            ></div>
          </div>
        </div>
      </div>

      <div class="layout-left-65-right-35-container layer-main-content">
        <div class="col-left">
          <div class="body-content-wrapper">
            <div class="description">
              <p v-for="desc in portfolioItem.description">
                {{ desc }}
              </p>
            </div>
            <div class="skills-learned"></div>
          </div>

          <div class="screenshots-wrapper">
            <div
              class="screenshot-wrapper"
              v-for="(screenshotNr, j) in Array(portfolioItem.nrOfScreenshots)"
            >
              <img
                :src="
                  '/portfolio-images/screenshots/' +
                  portfolioItem.subDirPathName +
                  '/' +
                  (j + 1) +
                  '.jpg'
                "
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-right">
          <div
            class="slot"
            *ngIf="project.url"
          >
            <div class="label">Live Url</div>
            <div class="value-highlight">
              <a
                :href="`${portfolioItem.url}`"
                target="_blank"
                class="card-content"
              >
                {{ portfolioItem.url }}
              </a>
            </div>
          </div>

          <div
            class="slot"
            v-if="portfolioItem.urlWebArchive"
          >
            <div class="label">Web Archive Url</div>
            <div class="value-highlight">
              <a
                :href="portfolioItem.urlWebArchive"
                target="_blank"
              >
                Open old offline url
              </a>
            </div>
          </div>

          <div
            class="slot"
            v-if="portfolioItem.client"
          >
            <div class="label">Client</div>
            <div class="value-highlight">
              {{ portfolioItem?.client?.name }}
            </div>
          </div>

          <div
            class="slot"
            v-if="portfolioItem.date"
          >
            <div class="label">Launch Date</div>
            <div class="value-highlight">
              {{
                portfolioItem.date
                  ? new Date(portfolioItem.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "No Date Available"
              }}
            </div>
          </div>

          <div
            class="slot"
            v-if="portfolioItem?.country?.name"
          >
            <div class="label">Country</div>
            <div class="value-highlight">{{ portfolioItem.country?.name }}</div>
          </div>

          <div class="slot">
            <div class="label">Stack</div>
            <div class="value-highlight">
              <ul>
                <li v-for="tech in portfolioItem.techs">
                  {{ tech.name }}
                </li>
              </ul>
            </div>
          </div>

          <div class="slot">
            <div class="label">Key features</div>
            <div class="value-highlight">
              <ul>
                <li v-for="feature of portfolioItem.keyFeatures">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>

          <div class="slot">
            <div class="label">Key learnings</div>
            <div class="value-highlight">
              <ul>
                <li v-for="skill of portfolioItem.skillsLearned">
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>

          <div
            class="slot"
            v-if="portfolioItem?.award"
          >
            <div class="label">Award</div>

            <div class="award-wrapper">
              <a
                :href="portfolioItem.award.websiteUrl"
                target="_blank"
              >
                <img
                  :src="`/assets/portfolio-images/awards/${portfolioItem.award.screenshot}`"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
