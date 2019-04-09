<template>
  <div class="testProps">
    <main>
      <slot name="testSlot" :msgs="msgs" :tt="tt">{{msgs.msg1}}</slot>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'TestProps',
    data () {
      return {
        msgs: {
          msg: '123',
          msg1: '345'
        },
        tt: '666'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
