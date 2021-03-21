<template>
  <el-main>
    <paginator :current-page="currentPage" :pages="pagesCount" @changePage="changePage"/>
    <card v-for="game of games" :key="game.teseraId" :gamedata="game"/>
  </el-main>
</template>

<script>
  import Card from '../components/Card/Card'
  import Paginator from '../components/Pagination/Pagination'

  export default {
    components: {
      Card,
      Paginator
    },
    data () {
      return {
        games: [],
        pagesCount: 0,
        pageLimit: 10
      }
    },
    async fetch () {
      await fetch(
        `https://api.tesera.ru/games?Limit=${this.pageLimit}&Offset=${this.currentPage}`
      ).then((res) => {
        this.pagesCount = parseInt(res.headers.get('x-total-pages'))
        return res.json()
      }).then((res) => {
        this.games = res
      })
    },
    computed: {
      currentPage () {
          return this.$store.state.default.currentPage
      }
    },
    methods: {
      changePage (pageNumber) {
        this.$store.dispatch('default/setCurrentPage', pageNumber)
        this.$fetch()
      }
    }
  }

</script>

<style lang="scss">

  .el-main {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
  }

</style>
