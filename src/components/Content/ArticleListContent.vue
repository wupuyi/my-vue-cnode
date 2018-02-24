<template>
  <div class="container">
    <h2 class="title">企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async</h2>
    <div class="author">
      <img src="https://avatars1.githubusercontent.com/u/227713?v=3&s=120" title="atian25" class="author-avatar">
      <div class="info">
        <p>
          <span class="name">atian25</span>
          <span class="status"><b>250</b>/222222</span>
        </p>
        <p>
          <span>2月前</span>
          <span>1天前</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    article: {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.container
  padding 10px 15px
  border-bottom 1px solid #cccccc
.title
  margin 0
  margin-bottom 10px
  font-size 16px
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
.author
  display flex
  .author-avatar
    display block
    width 40px
    height 40px
    border-radius 50%
    border 1px solid #f3f3f3
  .info
    margin-left 10px
    width 100%
    color #999999
    p
      display flex
      width 100%
      justify-content space-between
      margin 0
      padding 3px 0
      font-size 14px
      span.name
        display block
      span.status
        b
          color $color-background
</style>
