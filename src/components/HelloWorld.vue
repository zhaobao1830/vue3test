<template>
  <div class="hello">
    <listgd></listgd>
  </div>
</template>

<script>
  import listgd from './listguodu'

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
    listgd
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
