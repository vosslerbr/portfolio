<template>
  <div class="page">
    <div class="page-content">
      <h2>Contact</h2>
      <p>Connect with me or check out the cool stuff I'm working on!</p>

      <div id="card-container">
        <p v-if="store.loading">Loading contact cards...</p>
        <p v-else-if="store.errorOccurred">An error occurred.</p>

        <ContactCard
          v-else
          v-for="(contact_card, index) in store.contact_cards"
          :key="index"
          :contact_card="contact_card"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ContactCard from '../components/ContactCard.vue';

  import { useStore } from '../store/store';
  const store = useStore();
</script>

<style scoped>
  p {
    line-height: 1.35;
    font-weight: bolder;
  }
  #card-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
  }
</style>
