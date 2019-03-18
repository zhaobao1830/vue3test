<template>
  <div class="hello">
    <dhgz></dhgz>
  </div>
</template>

<script>
  import dhgz from './donghuagouzi'

  export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  components: {
    dhgz
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @keyframes bounce-in
    0% {
      transform: scale(0)
    }
    50% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1)
    }
  .active
    transform-origin: left center
    animation: bounce-in 1s
  .leave
    transform-origin: left center
    animation: bounce-in 1s reverse
</style>
