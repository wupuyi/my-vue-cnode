<template>
  <div class="article-list">
    <ul>
      <li v-for="article in articleList" :key="article.id" @click="_goArticleContent(article.id)">
        <article-list-content :article="article"></article-list-content>
      </li>
    </ul>
  </div>
</template>

<script>
import ArticleListContent from './ArticleListContent'
export default {
  data () {
    return {
      articleList: []
    }
  },
  components: {
    ArticleListContent
  },
  created () {
    this._getArticle()
  },
  methods: {
    _getArticle () {
      let that = this
      this.$http.get('https://cnodejs.org/api/v1/topics')
          .then(function(response) {
            that.articleList = that.articleList.concat(response.data.data)
            console.log('that.articleList', that.articleList)
            console.log('response.data', that.articleList)
            // console.log(response.data.data)
          })
          .catch(function(error) {
            console.log(error)
          })
    },
    _goArticleContent(id) {
      console.log(id)
      this.$router.push({
        path: `/article/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
ul
  list-style-type none
  padding 0
  margin 0
</style>
