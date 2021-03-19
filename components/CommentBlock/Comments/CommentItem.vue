<template>
  <el-col :span="24">
    <li>
      <p>{{comment.comment}}</p>
    </li>
  </el-col>
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

<style scoped>
  li {
    margin: 10px 0;
  }

</style>
