<template>
  <div class="page">
    <p v-if="store.loading">Loading projects...</p>
    <p v-else-if="store.errorOccurred">An error occurred.</p>
    <div v-else-if="Object.keys(project).length" class="page-content">
      <h2>{{ project.attributes.title }}</h2>
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      <div id="links">
        <a
          v-bind:href="project.attributes.demo_link"
          target="_blank"
          v-bind:class="store.darkModeEnabled ? `dark-mode-link` : ``"
          >Demo</a
        >
        <a
          v-bind:href="project.attributes.github_link"
          target="_blank"
          v-bind:class="store.darkModeEnabled ? `dark-mode-link` : ``"
          >GitHub Repo</a
        >
      </div>

      <div v-for="(gallery_image, index) in project.attributes.gallery_images.data" :key="index">
        <img
          v-bind:src="`${gallery_image.attributes.formats.large.url}`"
          v-bind:alt="gallery_image.attributes.alternativeText"
          v-bind:class="store.darkModeEnabled ? `project-img-dark-mode` : ``"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios';
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from '../store/store';

  const route = useRoute();
  const store = useStore();

  const project = ref<any>({});

  // On page mount, fetch the project data
  onMounted(async () => {
    try {
      store.loading = true;

      const response = await axios.get(
        `https://lit-reaches-99050.herokuapp.com/api/projects/${route.params.id}?populate=*`
      );

      console.log(response);
      project.value = response.data.data;
      store.loading = false;
    } catch (error) {
      console.error(error);
      store.loading = false;
      store.errorOccurred = true;
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
    font-weight: bolder;
  }

  #links {
    display: flex;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  a {
    margin-right: 2rem;
    font-weight: bolder;
    display: block;
    padding: 1rem;
    min-width: 145px;
    text-align: center;
    background-color: white;
    background-image: var(--gradient);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 0;
    border-radius: 5px;
    transition: var(--default-transition);
    border: var(--border);
    box-shadow: var(--sharp-shadow);
  }

  a.dark-mode-link {
    border: var(--border-darkmode);
    box-shadow: var(--sharp-shadow-darkmode);
    background-color: #27242b;
    color: var(--font-color-darkmode);
  }

  a:hover {
    color: white;
    box-shadow: var(--sharp-shadow-hover);
    background-size: 100%;
  }

  a.dark-mode-link:hover {
    box-shadow: var(--sharp-shadow-link-hover-darkmode);
  }

  img {
    width: 100%;
    border-radius: 5px;
    border: var(--border);
    box-shadow: var(--sharp-shadow);
    margin-bottom: 2rem;
  }

  img.project-img-dark-mode {
    border: var(--border-darkmode);
    box-shadow: var(--sharp-shadow-darkmode);
  }

  @media screen and (max-width: 590px) {
    h2 {
      line-height: normal;
      margin-top: -0.67rem;
      margin-bottom: calc(2rem - 0.67rem);
      white-space: normal;
    }
  }
</style>
