<template>
  <li class="comment_item">
    {{ comment.comment }}
  </li>
</template>

<script>
  export default {
    name: 'CommentItem',
    props: ['comment'],
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .comment_item {
    margin: 10px 0;
  }
</style>
