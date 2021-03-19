<template>
  <el-row class="comments">
    <el-button type="primary" @click="open">
      Добавить комментарий
    </el-button>
    <el-row v-if="comments">
      <ul class="comments_list">
        <comment-item v-for="comment of comments" :key="comment.id" :comment="comment"/>
      </ul>
    </el-row>
  </el-row>
</template>

<script>
  import { generateLiteId } from '../../helpers'
  import CommentItem from './Comments/CommentItem'

  export default {
    name: 'CommentBlock',
    components: { CommentItem },
    props: ['comments', 'gameId'],
    methods: {
      open () {
        this.$prompt('Введите комментарий', {
          confirmButtonText: 'Добавить',
          cancelButtonText: 'Отмена'
        }).then((obj) => {
          this.$store.commit('default/ADD_COMMENT', {
            gameId: this.gameId,
            comment: {
              id: generateLiteId(),
              comment: obj.value,
              time: new Date()
            }
          })
          this.$message({
            type: 'success',
            message: 'Комментарий добавлен'
          })
        }).catch((er) => {
          this.$message({
            type: 'info',
            message: 'Отмена'
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .comments_list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

</style>
