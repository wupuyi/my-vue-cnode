<template>
  <div class="header">
    <router-link to="/" tag="div">
      <i class="iconfont icon-nodejs"></i>
      <h1 class="logo-title">Cnode 社区</h1>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

div.header
  background-color $color-background
  div
    display flex
    align-items center
    justify-content center
h1.logo-title
  font-weight normal
  font-size 26px
  color $color-icon
i.icon-nodejs
  color: $color-icon
  font-size: 50px
</style>
