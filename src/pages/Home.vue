<template>
  <div class="page" id="home-page">
    <div class="page-content" id="home-page-content">
      <h1>Hi, I'm Brady</h1>
      <h2>I'm a web developer</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  #home-page-content {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
    text-transform: uppercase;
    line-height: 0.75;
    transition: var(--default-transition);
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    white-space: nowrap;
    line-height: 0.75;
    margin: 0px;
    transition: var(--default-transition);
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
