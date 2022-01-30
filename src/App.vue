<template>
  <div>
    <header>
      <router-link to="/" id="logo-link"><img src="./assets/images/b-logo.svg" /></router-link>
    </header>

    <aside>
      <nav>
        <ul>
          <li>
            <router-link to="/">
              <div style="width: 20px; margin-right: 0.25rem"><HomeIcon /></div>
              Home</router-link
            >
          </li>
          <li>
            <router-link to="/projects"
              ><div style="width: 20px; margin-right: 0.25rem">
                <CollectionIcon />
              </div>
              Projects</router-link
            >
          </li>
          <li>
            <router-link to="/about"
              ><div style="width: 20px; margin-right: 0.25rem">
                <UserCircleIcon />
              </div>
              About</router-link
            >
          </li>
          <li>
            <router-link to="/contact"
              ><div style="width: 20px; margin-right: 0.25rem">
                <AtSymbolIcon />
              </div>
              Contact</router-link
            >
          </li>
        </ul>
      </nav>
      <div>
        <div id="social-links">
          <a
            v-for="(contact_card, index) in contact_cards"
            :key="index"
            v-bind:href="contact_card.attributes.link"
            target="_blank"
            ><i
              v-bind:class="`pi ${contact_card.attributes.icon}`"
              v-bind:style="`color: ${contact_card.attributes.icon_color}`"
            ></i
          ></a>
        </div>
        <footer>
          <p>&copy; {{ new Date().getFullYear() }} Brady Vossler</p>
          <p>
            Made with ❤️ using
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a>
          </p>
        </footer>
      </div>
    </aside>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/solid';
import { CollectionIcon } from '@heroicons/vue/solid';
import { UserCircleIcon } from '@heroicons/vue/solid';
import { AtSymbolIcon } from '@heroicons/vue/solid';
import 'primeicons/primeicons.css';

import axios from 'axios';
import { ref, onMounted } from 'vue';

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
#logo-link {
  display: flex;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  margin-bottom: 1.5rem;
  line-height: 0.78;
}

li a {
  line-height: 0.78;
}

#social-links {
  display: flex;
  flex-direction: row;
}

#social-links i {
  margin-right: 1rem;
  font-size: 1.25rem;
}

footer {
  margin-top: 1rem;
}

footer p:first-of-type {
  margin-bottom: 0.5rem;
}

footer a {
  color: #42b883;
  text-decoration: underline;
  display: inline-block;
}
</style>
