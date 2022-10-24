<template>
  <div class="page">
    <div class="page-content">
      <h2>About</h2>
      <div id="section-container">
        <p v-if="store.loading">Loading About page...</p>
        <p v-else-if="store.errorOccurred">An error occurred.</p>

        <div
          v-else
          v-for="(about_section, index) in store.about_sections"
          :key="index"
          class="about-section-container">
          <AboutSectionReverse v-if="index % 2 === 0" :about_section="about_section" />
          <AboutSection v-else :about_section="about_section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import AboutSection from '../components/AboutSection.vue';
  import AboutSectionReverse from '../components/AboutSectionReverse.vue';
  import { useStore } from '../store/store';

  const store = useStore();
</script>

<style scoped>
  #section-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2rem;
  }

  .about-section-container {
    grid-column: span 12;
  }
</style>
