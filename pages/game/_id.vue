<template>
  <el-container v-if="dataLded" class="game-information">
    <link-button class="game-information_back-button" link="/" button-text="К списку игр"/>
    <el-main>
      <el-row class="game-information_main">
        <el-col class="game-information_left" :span="6">
          <div class="grid-content bg-purple">
            <el-image class="game-card_image" :src="gameInformation.photoUrl"/>
          </div>
        </el-col>
        <el-col class="game-information_right" :span="18">
          <div class="game-information_title">{{ gameInformation.title }}</div>
          <div class="game-information_description" v-html="gameInformation.description"/>
        </el-col>
      </el-row>
      <comment-block :comments="comments" :game-id="gameInformation.teseraId"/>
    </el-main>
  </el-container>
</template>

<script>
  import LinkButton from '../../components/LinkButton/LinkButton'
  import CommentBlock from '../../components/CommentBlock/CommentBlock'

  export default {
    components: {
      LinkButton,
      CommentBlock
    },
    data () {
      return {
        dataLoaded: false
      }
    },
    computed: {
      comments () {
        if (this.dataLded) {
          return this.$store.state.default.comments[this.gameInformation.teseraId].comments
        } else {
          return []
        }
      },
      gameInformation () {
        return this.$store.state.default.gameInfo.game
      },
      dataLded () {
        return this.$store.state.default.fullyLoaded
      }
    },
    created () {
      this.$store.dispatch('default/getGame', { self: this.$route.params.id })
    }
  }

</script>

<style lang="scss">

  .game-information {
    &_back-button {
      margin: 0 auto;
    }

    &_main {
      display: flex;
      align-items: center;
    }

    &_right {
      padding-left: 25px;
    }

    &_title {
      font-size: 20px;
      font-weight: bold;
    }
  }

</style>
