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
  background-color: #21d4fd;
  background-image: url('../assets/images/imageedit_6_5544743324.png'),
    linear-gradient(135deg, #21d4fd 0%, #b721ff 100%);
  border-radius: 5px;
  transition: 0.1s;
  border: 2px solid #052127;
  box-shadow: 0.5rem 0.5rem #052127;
  color: #fff;
}

.contact-card:hover {
  box-shadow: 0.75rem 0.75rem #052127;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.title-container i {
  margin-right: 0.5rem;
  font-size: 1.1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.171);
  color: #fff;
}

a {
  display: inline-block;
  padding: 2rem 1rem;
  width: 100%;
  color: #fff;
}

p {
  line-height: 0.8;
}

h3 {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.5rem;

  line-height: 0.75;
  color: #fff;
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
