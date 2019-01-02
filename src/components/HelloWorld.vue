<template>
  <div class="hello">
    <scroll ref="scroll" class="hello-content" :data="helloList">
      <div>
        <div v-if="helloList.length" class="slider-wrapper">
          <div class="slider-content">
            <van-swipe :autoplay="3000" indicator-color="white" :height="150">
              <van-swipe-item v-for="(item, index) in helloList" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="age">{{item.age}}</div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div class="hello-bottom">
          <div v-for="(item, index) in helloList" :key="index">{{item.name}}</div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      helloList: [
        {
          name: 'test',
          age: '123'
        },
        {
          name: 'test',
          age: '1233'
        },
        {
          name: 'test',
          age: '1234'
        },
        {
          name: 'test',
          age: '1235'
        },
        {
          name: 'test',
          age: '1236'
        }
      ]
    }
  },
  components: {
    Scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
 .hello
   position: fixed
   width: 100%
   top: 0
   bottom: 0
   .hello-content
     height: 100%
     overflow: hidden
     .slider-wrapper
       position: relative
       width: 100%
       height: 0
       padding-top: 40%
       overflow: hidden
       .slider-content
         position: absolute
         left: 0
         top: 0
         width: 100%
         height: 100%
         .name
           height: 50px
         .age
           height: 50px
   .hello-bottom
     height: 1800px
</style>
