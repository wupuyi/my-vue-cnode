<template>
  <div class="header">
      <i class="iconfont icon-nodejs"></i>
      <h1 class="logo-title">Cnode 社区</h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

div.header
  display flex
  align-items center
  justify-content center
  background-color $color-background
h1.logo-title
  font-weight normal
  font-size 26px
  color $color-icon
i.icon-nodejs
  color: $color-icon
  font-size: 50px
</style>
