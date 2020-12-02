<template>
  <div id="widget-app">
    <img alt="Vue logo" src="https://github.com/ramigs/vue-widget/raw/master/src/assets/logo.png">
    <HelloWorld msg="Vue Widget"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'WidgetApp',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#widget-app {
  all: initial;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
