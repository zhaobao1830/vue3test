<template>
  <!--多个元素或组件的过渡-->
  <div class="root">
    <transition mode="in-out">
      <div v-if="show" key="hello">Hello World</div>
      <div v-else key="bye">Bye World</div>
    </transition>
    <button @click="handleClick">toggle</button>
  </div>
</template>

<script>
  export default {
    name: 'duogedonghua',
    data () {
      return {
        show: true
      }
    },
    methods: {
      handleClick () {
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>
  .v-enter, .v-leave-to {
    opacity: 0;
  }
  .v-enter-active, .v-leave-active{
    transition: opacity 1s;
  }
</style>
