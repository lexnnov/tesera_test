<template>
  <el-container>
    <el-header style="display: flex; justify-content: center">
      <link-button link="/" button-text="К списку игр"/>
    </el-header>
    <el-main v-if="game">
      <el-row class="gameInfo">
        <el-col  :span="6">
          <div class="grid-content bg-purple">
            <img width="200px" :src="game.game.photoUrl"></img>
          </div>
        </el-col>
        <el-col v-if="game" :span="18">
          <div class="grid-content bg-purple">
            <div>{{ game.game.title }}</div>
            <div v-html="game.game.description"/>
          </div>
        </el-col>
      </el-row>
      <comment-block :comments="comments" :game-id="game.game.teseraId" />
    </el-main>
  </el-container>
</template>

<script>
  import LinkButton from '../components/LinkButton/LinkButton'
  import CommentBlock from '../components/CommentBlock/CommentBlock'
  export default {
    components: { LinkButton, CommentBlock },
    data () {
      return {
        dataLoaded: false
      }
    },
    computed: {
      comments () {
        if (this.dataLded) {
          return this.$store.state.comments.comments[this.$store.state.comments.gameInfo.game.teseraId].comments
        } else {
          return []
        }
      },
      game () {
        return this.$store.state.comments.gameInfo
      },
      dataLded () {
        return this.$store.state.comments.fullyLoaded
      }
    },
    created () {
      this.$store.dispatch('comments/getGame', { self: this.$route.params.id })
    }
  }

</script>

<style >
  .header {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .comments {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #d2d2d2;
  }
  .gameInfo {
    display: flex;
    align-items: center;
  }

</style>
