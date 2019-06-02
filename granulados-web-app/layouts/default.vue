<template>
  <div>
    <HeaderBar />
    <section class="grid">
      <div class="navigation-bar">
        <NavigationBar />
      </div>
      <div class="body">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  components: {
    HeaderBar,
    NavigationBar,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.body {
  grid-column: 2;
}

.grid {
  display: grid;
  grid-auto-columns: 15% 80%;
  grid-gap: 2%;
}

.navigation-bar {
  grid-column: 1;
}
</style>
