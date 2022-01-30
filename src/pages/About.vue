<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

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
      <p v-for="(section, index) in about_sections" :key="index">
        {{ section.attributes.about_paragraph }}
      </p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #b83f90;
}
</style>
