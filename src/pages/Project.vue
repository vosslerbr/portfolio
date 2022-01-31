<template>
  <div class="page">
    <p v-if="loading">Loading projects...</p>
    <p v-else-if="errorOccurred">An error occurred.</p>
    <div v-else-if="Object.keys(project).length" class="page-content">
      <h2>{{ project.attributes.title }}</h2>
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      <a v-bind:href="project.attributes.demo_link" target="_blank">Demo</a>
      <a v-bind:href="project.attributes.github_link" target="_blank">GitHub Repo</a>
      <div v-for="(gallery_image, index) in project.attributes.gallery_images.data" :key="index">
        <img
          v-bind:src="`http://localhost:1337${gallery_image.attributes.formats.large.url}`"
          v-bind:alt="gallery_image.attributes.alternativeText"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// project page state
const loading = ref(false);
const errorOccurred = ref(false);
const project = ref<any>({});

// On page mount, fetch the project data
onMounted(async () => {
  try {
    loading.value = true;

    const response = await axios.get(
      `http://localhost:1337/api/projects/${route.params.id}?populate=*`
    );
    console.log(response);
    project.value = response.data.data;
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
    errorOccurred.value = true;
  }
});

const paragraphs = computed(() => {
  return project.value.attributes.description.split('\n');
});
</script>

<style scoped>
p {
  margin-bottom: 1rem;
  line-height: 1.35;
}

img {
  width: 100%;
  border-radius: 5px;
}
</style>
