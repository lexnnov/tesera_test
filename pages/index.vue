<template>
  <el-main>
    <paginator @changePage="changePage"/>
    <card v-for="(game, id) of games" :key="game.teseraId" :index="id" :gamedata="game"/>
  </el-main>
</template>

<script>
  import Card from '../components/Card/Card'
  import Paginator from '../components/Pagination/Pagination'

  export default {
    components: { Card, Paginator },
    data () {
      return {
        games: []
      }
    },
    async created () {
      this.games = await fetch(
      'https://api.tesera.ru/games?Limit=10'
      ).then(res => res.json())
    },
    methods: {
      async changePage (el) {
        this.games = await fetch(
        `https://api.tesera.ru/games?Limit=10&Offset=${el * 10}`
        ).then(res => res.json())
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
