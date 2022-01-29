<template>
  <div>
    <header>
      <router-link to="/" id="logo-link"><img src="./assets/images/b-logo.svg" /></router-link>
    </header>

    <aside>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div>
        <div id="social-links">
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
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

    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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

#social-links p {
  margin-right: 1rem;
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
}
</style>
