<template>
  <div id="app">
    <IndexPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import IndexPage from "./views/index";

export default {
  name: 'App',
  components: {
    IndexPage
  }
}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
