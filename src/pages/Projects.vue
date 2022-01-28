<template>
  <div class="page-content">
    <h2>Projects</h2>

    <p v-if="loading">Loading projects...</p>
    <p v-else-if="errorOccurred">An error occurred.</p>
    <ProjectCard v-else v-for="(project, index) in projects" :key="index" :project="project" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

// Projects page state
const loading = ref(false);
const errorOccurred = ref(false);
const projects = ref([]);

// On page mount, fetch the Projects data
onMounted(async () => {
  try {
    loading.value = true;
    const response = await axios.get('http://localhost:1337/api/projects?populate=*');
    console.log(response);
    projects.value = response.data.data;
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
    errorOccurred.value = true;
  }
});
</script>

<style scoped></style>
