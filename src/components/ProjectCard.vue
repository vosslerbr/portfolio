<template>
  <div class="project-card">
    <div>
      <img
        v-bind:src="`http://localhost:1337${project.attributes.thumbnail.data.attributes.formats.medium.url}`"
        v-bind:alt="project.attributes.thumbnail.data.attributes.alternativeText"
      />
    </div>
    <h3>{{ project.attributes.title }}</h3>
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

<style scoped>
.project-card {
  grid-column: span 6;
  padding: 1rem;
  background-color: gray;
  border-radius: 5px;
}

h3 {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 1rem 0px 0.5rem 0px;
  line-height: 0.75;
}

.project-card > div {
  width: 100%;
}

.project-card img {
  width: 100%;
  border-radius: 3px;
}

ul {
  display: flex;
}

li {
  margin-right: 0.5rem;
  font-size: 0.75rem;
  opacity: 0.75;
}
</style>
