<template>
  <div class="hello">
    <v-child1>
      <template v-slot="scope">
        <v-child v-for = "(item, index) in list"
                 :type="item.type"
                 :key="index"
                 @click.native.prevent.stop="buttonMethods(scope)">
        </v-child>
      </template>
    </v-child1>
  </div>
</template>

<script>
  import VChild1 from './child1'
  import VChild from './child'

  export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [{ name: '编辑', func: 'handleEdit', type: 'edit' }, { name: '删除', func: 'handleDelete', type: 'del' }]
    }
  },
  created () {
  },
  methods: {
    buttonMethods (index) {
      console.log(index)
    }
  },
  components: {
    VChild,
    VChild1
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
