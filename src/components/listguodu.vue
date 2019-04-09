<template>
  <div class="listguodu">
    <transition-group tag="div">
      <div v-for="item in list" :key="item.id">
        {{item.title}}
      </div>
    </transition-group>
    <button @click="handleButtonClick">Add</button>
  </div>
</template>

<script>
  let count = 0

  export default {
    name: 'listguodu',
    data () {
      return {
        list: []
      }
    },
    methods: {
      handleButtonClick () {
        this.list.push({
          id: count++,
          title: 'hello word'
        })
      }
    }
  }
</script>

<style scoped>
  .v-enter, .v-leave-to{
    opacity: 0;
  }
  .v-enter-active, .v-leave-active{
    transition: opacity 1s;
  }
</style>
