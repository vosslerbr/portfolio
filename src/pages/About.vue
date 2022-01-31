<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import AboutSection from '../components/AboutSection.vue';
import AboutSectionReverse from '../components/AboutSectionReverse.vue';

// Projects page state
const loading = ref(false);
const errorOccurred = ref(false);
const about_sections = ref([]);

// On page mount, fetch the Projects data
onMounted(async () => {
  try {
    loading.value = true;
    const response = await axios.get('http://localhost:1337/api/about-sections?populate=*');
    about_sections.value = response.data.data;
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
    errorOccurred.value = true;
  }
});
</script>

<template>
  <div class="page">
    <div class="page-content">
      <h2>About</h2>
      <div id="section-container">
        <p v-if="loading">Loading projects...</p>
        <p v-else-if="errorOccurred">An error occurred.</p>

        <div
          v-else
          v-for="(about_section, index) in about_sections"
          :key="index"
          class="about-section-container"
        >
          <AboutSectionReverse v-if="index % 2 === 0" :about_section="about_section" />
          <AboutSection v-else :about_section="about_section" />
        </div>
      </div>
    </div>
  </div>
</template>

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
