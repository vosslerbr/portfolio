<template>
  <div
    v-bind:class="store.darkModeEnabled ? `project-card dark-mode-project-card` : `project-card`"
  >
    <router-link :to="{ path: '/project/' + project.id }">
      <div>
        <img
          v-bind:src="`${project.attributes.thumbnail.data.attributes.formats.medium.url}`"
          v-bind:alt="project.attributes.thumbnail.data.attributes.alternativeText"
        />
      </div>
      <h3>{{ project.attributes.title }}</h3>
      <ul>
        <li v-for="(tag, index) in project.attributes.tags.data" :key="index">
          {{ tag.attributes.name }}
        </li>
      </ul></router-link
    >
  </div>
</template>

<script setup lang="ts">
  import { useStore } from '../store/store';

  const store = useStore();
  defineProps({
    project: Object,
  });
</script>

<style scoped>
  .project-card {
    grid-column: span 6;
    padding: 1rem;
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

  .dark-mode-project-card {
    border: var(--border-darkmode);
    background-color: #27242b;
    color: var(--font-color-darkmode);
    box-shadow: var(--sharp-shadow-darkmode);
  }

  .dark-mode-project-card a {
    color: var(--font-color-darkmode);
  }

  .project-card:hover {
    box-shadow: var(--sharp-shadow-hover);
    background-size: 100%;
  }

  .dark-mode-project-card:hover {
    box-shadow: var(--sharp-shadow-hover-darkmode);
  }

  .project-card:hover a {
    color: white !important;
  }

  h3 {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 1rem 0px 0.5rem 0px;
    line-height: 0.75;
    text-shadow: var(--normal-shadow);
  }

  .project-card > div {
    width: 100%;
  }

  .project-card img {
    width: 100%;
    border-radius: 3px;
    box-shadow: var(--normal-shadow);
    outline: 2px solid white;
  }

  ul {
    display: flex;
  }

  li {
    margin-right: 0.5rem;
    font-size: 0.75rem;
    text-shadow: var(--normal-shadow);
  }

  a {
    display: inline-block;
  }

  @media screen and (max-width: 1050px) {
    .project-card {
      grid-column: span 12;
    }
  }

  @media screen and (max-width: 960px) {
    .project-card {
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 730px) {
    .project-card {
      grid-column: span 12;
    }
  }
</style>
