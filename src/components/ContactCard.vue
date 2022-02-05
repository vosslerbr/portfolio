<template>
  <div class="contact-card">
    <a v-bind:href="contact_card.attributes.link" target="_blank">
      <div class="title-container">
        <i
          v-bind:class="`pi ${contact_card.attributes.icon}`"
          v-bind:style="`color: ${contact_card.attributes.icon_color}`"
        ></i>
        <h3>{{ contact_card.attributes.title }}</h3>
      </div>

      <p>{{ contact_card.attributes.username }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
  import 'primeicons/primeicons.css';

  defineProps({
    contact_card: Object,
  });
</script>

<style scoped>
  .contact-card {
    grid-column: span 4;
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

  .contact-card:hover {
    box-shadow: var(--sharp-shadow-hover);
    background-size: 100%;
  }

  .contact-card:hover > a {
    color: white;
  }

  .contact-card:hover i {
    color: white !important;
  }

  .title-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .title-container i {
    margin-right: 0.5rem;
    font-size: 1.1rem;
    text-shadow: var(--normal-shadow);
  }

  a {
    display: inline-block;
    padding: 2rem 1rem;
    width: 100%;
  }

  p {
    line-height: 0.8;
  }

  h3 {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 0.75;
  }

  @media screen and (max-width: 1160px) {
    .contact-card {
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 960px) {
    .contact-card {
      grid-column: span 4;
    }
  }

  @media screen and (max-width: 850px) {
    .contact-card {
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 565px) {
    .contact-card {
      grid-column: span 12;
    }
  }
</style>
