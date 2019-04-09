<template>
  <!--使用Velocity实现动画-->
  <div class="donghuagouzi">
    <transition
      name="fade"
      @before-enter="handleVeforeEnter"
      @enter="handleEnter"
      @after-enter="handleAfterEnter"
    >
      <div v-show="show">hello World</div>
    </transition>
    <button @click="handleClick">toggle</button>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'

  export default {
    name: 'donghuagouzi',
    data () {
      return {
        show: true
      }
    },
    methods: {
      handleClick: () => {
        this.show = !this.show
      },
      handleVeforeEnter: (el) => {
       el.style.opacity = 0
      },
      handleEnter: (el, done) => {
        Velocity(el, {
          opacity: 1
        }, {
          duration: 1000,
          complete: done
        })
      },
      handleAfterEnter: () => {
        console.log('动画结束')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
