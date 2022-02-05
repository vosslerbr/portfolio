<template>
  <div>
    <header>
      <div id="mobile-menu" @click="handleMobileMenuOpen(false)">
        <div class="mobile-menu-line" id="mobile-menu-line1"></div>
        <div class="mobile-menu-line" id="mobile-menu-line2"></div>
        <div class="mobile-menu-line" id="mobile-menu-line3"></div>
      </div>
      <router-link to="/" id="logo-link"><img src="./assets/images/b-logo.svg" /></router-link>

      <div id="toggle-container">
        <p>Dark mode {{ store.darkModeEnabled ? `on` : `off` }}</p>
        <div
          id="dark-mode-toggle"
          @click="handleDarkModeToggle"
          v-bind:class="store.darkModeEnabled ? `dark-mode-on` : `dark-mode-off`"
        >
          <div
            id="toggle-circle"
            v-bind:class="store.darkModeEnabled ? `toggle-on` : `toggle-off`"
          ></div>
        </div>
      </div>
    </header>

    <aside id="desktop-nav" v-bind:class="store.darkModeEnabled ? `sidebar-dark-mode-on` : ``">
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
            v-for="(contact_card, index) in store.contact_cards"
            :key="index"
            v-bind:href="contact_card.attributes.link"
            target="_blank"
            v-bind:title="contact_card.attributes.title"
            ><i
              v-bind:class="`pi ${contact_card.attributes.icon}`"
              v-bind:style="`color: ${contact_card.attributes.icon_color}`"
            ></i
          ></a>
        </div>
        <footer>
          <p>&copy; {{ new Date().getFullYear() }} Brady Vossler</p>
          <p>
            Made with <span @click="handleRandomGradient" style="cursor: pointer">❤️</span> using
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a>
          </p>
        </footer>
      </div>
    </aside>
    <aside id="mobile-nav" v-bind:class="store.darkModeEnabled ? `sidebar-dark-mode-on` : ``">
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
            v-for="(contact_card, index) in store.contact_cards"
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
            Made with <span @click="handleRandomGradient" style="cursor: pointer">❤️</span> using
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
  import randomGradient from './helpers/randomGradient';

  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useStore } from './store/store';

  const store = useStore();

  // On page mount, fetch the Projects data
  onMounted(async () => {
    try {
      store.loading = true;
      const contactCardResponse = await axios.get(
        'https://lit-reaches-99050.herokuapp.com/api/contact-cards?populate=*&sort=id'
      );
      store.contact_cards = contactCardResponse.data.data;

      const projectsResponse = await axios.get(
        'https://lit-reaches-99050.herokuapp.com/api/projects?populate=*&sort=id'
      );

      store.projects = projectsResponse.data.data;

      const aboutSectionsResponse = await axios.get(
        'https://lit-reaches-99050.herokuapp.com/api/about-sections?populate=*&sort=id'
      );
      store.about_sections = aboutSectionsResponse.data.data;

      store.loading = false;
    } catch (error) {
      console.error(error);
      store.loading = false;
      store.errorOccurred = true;
    }
  });

  const handleRandomGradient = () => {
    const { gradient, newCurrentRandomNum } = randomGradient(store.currentRandomNum);

    document.documentElement.style.setProperty('--gradient', gradient);

    store.currentRandomNum = newCurrentRandomNum;
  };

  const showHideNav = () => {
    const topMenuLine = document.getElementById('mobile-menu-line1');
    const centerMenuLine = document.getElementById('mobile-menu-line2');
    const bottomMenuLine = document.getElementById('mobile-menu-line3');

    if (store.mobileMenuOpen) {
      // if the mobile menu is open, close it
      document.getElementById('mobile-nav').style.transform = 'translate(-20rem, 0)';

      centerMenuLine.style.opacity = '1';
      topMenuLine.className = 'mobile-menu-line';
      bottomMenuLine.className = 'mobile-menu-line';

      store.mobileMenuOpen = false;
    } else {
      // otherwise, open it
      document.getElementById('mobile-nav').style.transform = 'translate(20rem, 0)';
      centerMenuLine.style.opacity = '0';
      topMenuLine.className = 'mobile-menu-line top-menu-line-open';
      bottomMenuLine.className = 'mobile-menu-line bottom-menu-line-open';

      store.mobileMenuOpen = true;
    }
  };

  const handleMobileMenuOpen = async (isNavLink?: boolean) => {
    // if nav link is what's closing the menu, introduce a small delay so it doesn't QUITE close instantly
    if (isNavLink) {
      setTimeout(() => {
        showHideNav();
      }, 200);
    } else {
      showHideNav();
    }
  };

  const handleDarkModeToggle = () => {
    if (store.darkModeEnabled) {
      // if dark mode is ON, turn it off
      document.querySelector('body').className = '';

      store.darkModeEnabled = false;
    } else {
      // otherwise, turn it ON
      document.querySelector('body').className = 'dark-mode-body';

      store.darkModeEnabled = true;
    }
  };
</script>

<style scoped>
  #toggle-container {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    align-items: center;
  }

  #toggle-container p {
    color: white;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    text-shadow: var(--normal-shadow);
  }

  #dark-mode-toggle {
    transition: var(--default-transition);
    padding: 4px;
    width: 48px;
    border-radius: 400px;
    display: flex;
    flex-direction: row;
    box-shadow: var(--normal-shadow);
  }

  .dark-mode-on {
    background-color: #d277ff;
  }
  .dark-mode-off {
    background-color: #f0f0f0;
  }

  #toggle-circle {
    background-color: white;
    box-shadow: var(--normal-shadow);
    border-radius: 400px;
    width: 16px;
    height: 16px;
    position: relative;
    transition: var(--default-transition);
  }

  .toggle-on {
    left: 24px;
  }

  .toggle-off {
    left: 0px;
  }

  header img {
    text-shadow: var(--normal-shadow);
  }

  .top-menu-line-open {
    transform: translateY(0.63rem) rotate(45deg);
  }
  .bottom-menu-line-open {
    transform: translateY(-0.62rem) rotate(-45deg);
  }

  #mobile-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.5rem;
    position: relative;
    left: -100px;
    transition: var(--default-transition);
  }

  .mobile-menu-line {
    border-radius: 400px;
    width: 1.75rem;
    height: 0.25rem;
    background-color: #fff;
    transition: var(--default-transition);
    box-shadow: var(--normal-shadow);
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
    height: calc(100vh - 3rem);
    padding: 2rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--default-transition);
    text-shadow: var(--normal-shadow);
    background-color: #fff;
    box-shadow: var(--normal-shadow);
  }

  .sidebar-dark-mode-on {
    background-color: #27242b;
    color: var(--font-color-darkmode);
  }

  .sidebar-dark-mode-on a {
    color: var(--font-color-darkmode);
  }

  .sidebar-dark-mode-on #social-links i {
    color: var(--font-color-darkmode) !important;
  }

  #mobile-nav {
    display: none;
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
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.26);
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
    aside {
      left: -20rem;
      padding: 2rem 1rem;
    }

    #desktop-nav {
      left: -20rem;
    }

    #mobile-nav {
      display: flex;
    }

    #mobile-menu {
      position: relative;
      left: 0px;
    }

    #logo-link {
      margin-left: 1rem;
    }
  }
</style>
