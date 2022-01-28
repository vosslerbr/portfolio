// imports for the App and router
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// stylesheets for the whole app
import './assets/css/reset.css';
import './assets/css/global.css';

// Page components
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

// Define our routes for each page
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

// Initialize the router
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// Initialize app, set to use our router, mount the app
createApp(App).use(router).mount('#app');
