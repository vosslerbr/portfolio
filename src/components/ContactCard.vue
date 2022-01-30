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
  background-color: rgb(98, 114, 126);
  border-radius: 5px;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.title-container i {
  margin-right: 0.5rem;
  font-size: 1.1rem;
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
</style>
