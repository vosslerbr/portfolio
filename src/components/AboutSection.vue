<template>
  <div class="about-section">
    <div class="paragraphs-container">
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
    <div>
      <img
        v-bind:src="`http://localhost:1337${about_section.attributes.image.data.attributes.formats.large.url}`"
        v-bind:alt="about_section.attributes.image.data.attributes.alternativeText"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  about_section: Object,
});

const paragraphs = computed(() => {
  return props.about_section.attributes.about_paragraph.split('\n');
});
</script>

<style scoped>
.about-section {
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
}

p:not(:last-of-type) {
  margin-bottom: 1rem;
}

.about-section .paragraphs-container {
  grid-column: span 7;
  height: fit-content;
  margin: auto;
  line-height: 1.35;
}

.about-section > div {
  grid-column: span 5;
}

.about-section img {
  width: 100%;
  border-radius: 3px;
}
</style>
