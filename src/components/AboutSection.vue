<template>
  <div class="about-section">
    <div class="paragraphs-container">
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
    <div class="img-container">
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

  .paragraphs-container {
    grid-column: span 7;
    height: fit-content;
    margin: auto;
    line-height: 1.35;
    font-weight: bolder;
  }

  .img-container {
    grid-column: span 5;
  }

  .about-section img {
    width: 100%;
    border-radius: 5px;
    transition: var(--default-transition);
    border: var(--border);
    box-shadow: var(--sharp-shadow);
  }

  @media screen and (max-width: 1150px) {
    .paragraphs-container {
      grid-column: span 6;
    }

    .img-container {
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 1120px) {
    .paragraphs-container {
      grid-column: 1 / -1;
    }

    .img-container {
      grid-row: 1 / 2;
      grid-column: 3 / 11;
    }
  }

  @media screen and (max-width: 960px) {
    .paragraphs-container {
      grid-column: span 6;
    }

    .img-container {
      grid-row: auto;
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 800px) {
    .paragraphs-container {
      grid-column: 1 / -1;
    }

    .img-container {
      grid-row: 1 / 2;
      grid-column: 3 / 11;
    }
  }

  @media screen and (max-width: 550px) {
    .img-container {
      grid-column: 1 / -1;
    }
  }
</style>
