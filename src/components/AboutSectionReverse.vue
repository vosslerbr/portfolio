<template>
  <div class="about-section">
    <div class="img-container">
      <img
        v-bind:src="`${about_section.image_url}`"
        v-bind:class="store.darkModeEnabled ? `about-img-dark-mode` : ``" />
    </div>
    <div class="paragraphs-container">
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from '../store/store';

  const store = useStore();

  const props = defineProps({
    about_section: {
      type: Object,
      required: true,
    },
  });

  //TODO create a computed prop for paragraphs that contain \n
  const paragraphs = computed(() => {
    return props.about_section.paragraph.split('\n');
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

  .about-section img.about-img-dark-mode {
    border: var(--border-darkmode);
    box-shadow: var(--sharp-shadow-darkmode);
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
      grid-column: 1/ -1;
    }

    .img-container {
      grid-column: 3 / 11;
    }
  }

  @media screen and (max-width: 960px) {
    .paragraphs-container {
      grid-column: span 6;
    }

    .img-container {
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 800px) {
    .paragraphs-container {
      grid-column: 1/ -1;
    }

    .img-container {
      grid-column: 3 / 11;
    }
  }

  @media screen and (max-width: 550px) {
    .img-container {
      grid-column: 1 / -1;
    }
  }
</style>
