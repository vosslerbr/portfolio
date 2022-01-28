<template>
  <div>
    <header>
      <p>LOGO</p>
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
      <div id="social-links">
        <p>GitHub</p>
        <p>LinkedIn</p>
        <p>Instagram</p>
      </div>
    </aside>

    <div class="page">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  margin-bottom: 1rem;
}

#social-links {
  display: flex;
  flex-direction: row;
}
</style>
