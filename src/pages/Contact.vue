<template>
  <div class="page">
    <div class="page-content">
      <h2>Contact</h2>
      <p>Connect with me or check out the cool stuff I'm working on!</p>

      <div id="card-container">
        <p v-if="loading">Loading contact cards...</p>
        <p v-else-if="errorOccurred">An error occurred.</p>

        <ContactCard
          v-else
          v-for="(contact_card, index) in contact_cards"
          :key="index"
          :contact_card="contact_card"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import ContactCard from '../components/ContactCard.vue';

// Projects page state
const loading = ref(false);
const errorOccurred = ref(false);
const contact_cards = ref([]);

// On page mount, fetch the Projects data
onMounted(async () => {
  try {
    loading.value = true;
    const response = await axios.get('http://localhost:1337/api/contact-cards?populate=*');
    contact_cards.value = response.data.data;
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
    errorOccurred.value = true;
  }
});
</script>

<style scoped>
p {
  line-height: 0.8;
}
#card-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
}
</style>
