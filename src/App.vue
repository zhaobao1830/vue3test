<template>
  <div id="app">
    <Edit/>
  </div>
</template>

<script>
import Edit from './components/edit.vue'

export default {
  name: 'app',
  components: {
    Edit
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
