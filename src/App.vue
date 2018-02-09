<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/Header'

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style lang="stylus">
@import 'common/stylus/variable'
body
  color $color-text
</style>
