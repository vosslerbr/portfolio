<template>
  <div>
    <header>
      <div id="mobile-menu" @click="handleMobileMenuOpen(false)">
        <div class="mobile-menu-line" id="mobile-menu-line1"></div>
        <div class="mobile-menu-line" id="mobile-menu-line2"></div>
        <div class="mobile-menu-line" id="mobile-menu-line3"></div>
      </div>
      <router-link to="/" id="logo-link"><img src="./assets/images/b-logo.svg" /></router-link>
    </header>

    <aside>
      <nav>
        <ul>
          <li>
            <router-link to="/" @click="handleMobileMenuOpen(true)">
              <div style="width: 20px; margin-right: 0.25rem"><HomeIcon /></div>
              Home</router-link
            >
          </li>
          <li>
            <router-link to="/projects" @click="handleMobileMenuOpen(true)"
              ><div style="width: 20px; margin-right: 0.25rem">
                <CollectionIcon />
              </div>
              Projects</router-link
            >
          </li>
          <li>
            <router-link to="/about" @click="handleMobileMenuOpen(true)"
              ><div style="width: 20px; margin-right: 0.25rem">
                <UserCircleIcon />
              </div>
              About</router-link
            >
          </li>
          <li>
            <router-link to="/contact" @click="handleMobileMenuOpen(true)"
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
const mobileMenuOpen = ref(false);
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

const handleMobileMenuOpen = async (isNavLink?: boolean) => {
  // if nav link is what's closing the menu, introduce a small delay so it doesn't QUITE close instantly
  if (isNavLink) {
    setTimeout(() => {
      if (mobileMenuOpen.value) {
        // if the mobile menu is open, close it
        document.querySelector('aside').style.transform = 'translate(-20rem, 0)';
        mobileMenuOpen.value = false;
      } else {
        // otherwise, open it
        document.querySelector('aside').style.transform = 'translate(20rem, 0)';
        mobileMenuOpen.value = true;
      }
    }, 200);
  } else {
    if (mobileMenuOpen.value) {
      // if the mobile menu is open, close it
      document.querySelector('aside').style.transform = 'translate(-20rem, 0)';
      mobileMenuOpen.value = false;
    } else {
      // otherwise, open it
      document.querySelector('aside').style.transform = 'translate(20rem, 0)';
      mobileMenuOpen.value = true;
    }
  }
};
</script>

<style scoped>
#mobile-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1.5rem;
  position: relative;
  left: -100px;
  transition: 0.1s;
}

.mobile-menu-line {
  border-radius: 400px;
  width: 1.75rem;
  height: 0.25rem;
  background-color: rgb(255, 255, 255);
}

#logo-link {
  display: flex;
  margin-left: -1.75rem;
}

aside {
  left: 0;
  z-index: 2;
  position: fixed;
  top: 3rem;
  width: 20rem;
  background-color: rgb(83, 102, 114);
  height: calc(100vh - 3rem);
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;
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

@media screen and (max-width: 960px) {
  #mobile-menu {
    position: relative;
    left: 0px;
  }
  #logo-link {
    margin-left: 1rem;
  }
  aside {
    left: -20rem;
  }
}
</style>
