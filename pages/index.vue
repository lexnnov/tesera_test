<template>
  <el-main>
    <paginator @changePage="chanePage"/>
    <card v-for="(game, id) of games" :key="game.teseraId" :index="id" :gamedata="game"/>
  </el-main>
</template>

<script>
  import Card from '../components/Card/Card'
  import Paginator from '../components/Paginator/Paginator'

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
      async chanePage (el) {
        this.games = await fetch(
        `https://api.tesera.ru/games?Limit=10&Offset=${el * 10}`
        ).then(res => res.json())
      }
    }
  }

</script>

<style>

  .header {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .el-main {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
  }
</style>
