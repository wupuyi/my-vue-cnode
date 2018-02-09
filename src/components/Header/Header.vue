<template>
  <div class="header">
    <div class="logo">
      <i class="iconfont icon-nodejs"></i>
      <h1 class="logo-title">Cnode 社区</h1>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

// div.header
div.logo
  display flex
  align-items center
  justify-content center
h1.logo-title
  font-weight normal
  font-size 26px
i.icon-nodejs
  color: $color-icon
  font-size: 50px
</style>
