<template>
  <div class="hello">
    <test-props>
      <template v-slot:testSlot="slotProps">
        <p>{{slotProps.msgs.msg}}</p>
        <p>{{slotProps.tt}}</p>
      </template>
    </test-props>
  </div>
</template>

<script>
  import TestProps from 'components/TestProps'

  export default {
    name: 'HelloWorld',
    components: {
      TestProps
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
