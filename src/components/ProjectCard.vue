<template>
  <div class="project-card">
    <h3>{{ project.attributes.title }}</h3>
    <div>
      <img
        v-bind:src="`http://localhost:1337${project.attributes.thumbnail.data.attributes.formats.medium.url}`"
        v-bind:alt="project.attributes.thumbnail.data.attributes.alternativeText"
      />
    </div>
    <ul>
      <li v-for="(tag, index) in project.attributes.tags.data" :key="index">
        {{ tag.attributes.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  project: Object,
});
</script>
