<template>
  <div class="page">
    <div class="page-content">
      <h2>Projects</h2>

      <div id="card-container">
        <p v-if="store.loading">Loading projects...</p>
        <p v-else-if="store.errorOccurred">An error occurred.</p>
        <p>I'm in the process of gathering all my recent projects. Please check back later!</p>

        <!-- <ProjectCard
          v-else
          v-for="(project, index) in store.projects"
          :key="index"
          :project="project"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProjectCard from '../components/ProjectCard.vue';
  import { useStore } from '../store/store';

  const store = useStore();
</script>

<style scoped>
  #card-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2rem;
  }

  p {
    grid-column: 1 / -1;
  }
</style>
