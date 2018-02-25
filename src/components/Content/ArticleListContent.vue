<template>
  <div class="container">
    <h2 class="title">{{ article.title }}</h2>
    <div class="author">
      <img :src="article.author.avatar_url" :title="article.author.name" class="author-avatar">
      <div class="info">
        <p>
          <span class="name">{{ article.author.name }}</span>
          <span class="status"><b>{{ article.reply_count }}</b>/{{ article.visit_count }}</span>
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
  color $color-text
  padding 10px 15px
  border-bottom 1px solid $color-border
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
    border 1px solid $color-avatar
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
