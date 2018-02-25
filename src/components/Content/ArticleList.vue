<template>
  <div class="article-list">
    <ul>
      <li>
        <article-list-content></article-list-content>
      </li>
    </ul>
  </div>
</template>

<script>
import ArticleListContent from './ArticleListContent'
export default {
  data () {
    return {
    }
  },
  components: {
    ArticleListContent
  }
}
</script>

<style lang="stylus" scoped>
</style>
