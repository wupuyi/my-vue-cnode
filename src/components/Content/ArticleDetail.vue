<template>
  <div>
    <div class="content">
      <!-- <h1>{{$route.params.id}}</h1> -->
      <div class="main" v-html="article.content">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
      },
      id: this.$route.params.id
    }
  },
  methods: {
    _getArticle () {
      let that = this
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.id}`)
        .then(function (response) {
          that.article = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this._getArticle()
  }
}
</script>

<style lang="stylus">
.markdown-text
  padding 0 15px
  p
    line-height 1.5
    img
      width 100%
  blockquote
    margin-left 0
    margin-right 0
    border-left 3px solid #cccccc
    padding-left 20px
</style>
