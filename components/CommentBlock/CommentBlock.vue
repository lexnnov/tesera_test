<template>
  <el-row class="comments">
    <el-button type="primary" @click="open">
      Добавить комментарий
    </el-button>
    <el-row v-if="comments">
      <ul>
        <comment-item v-for="comment of comments" :key="comment.id" :comment="comment"/>
      </ul>
    </el-row>
  </el-row>
</template>

<script>
  import CommentItem from './Comments/CommentItem'

  export default {
    name: 'CommentBlock',
    components: { CommentItem },
    props: ['comments', 'gameId'],
    methods: {
      open () {
        this.$prompt('ведите комментарий', {
          confirmButtonText: 'Добавить',
          cancelButtonText: 'Отмена'
        }).then((obj) => {
          const today = new Date()
          const milliseconds = today.getMilliseconds()
          this.$store.commit('comments/ADD_COMMENT', {
            gameId: this.gameId,
            comment: {
              id: milliseconds,
              comment: obj.value,
              time: new Date()
            }
          })
          this.$message({
            type: 'success',
            message: 'Комментарий добавлен'
          })
        }).catch((er) => {
          console.log(er)
          this.$message({
            type: 'info',
            message: 'Отмена'
          })
        })
      }
    }
  }
</script>

<style scoped>

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

</style>
