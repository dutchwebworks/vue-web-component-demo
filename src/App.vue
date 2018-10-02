<template>
  <div id="app">
    <NameBlock/>
  </div>
</template>

<script>
import NameBlock from './components/NameBlock'

export default {
  name: 'app',
  components: {
    NameBlock
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
