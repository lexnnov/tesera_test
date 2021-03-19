<template>
  <div class="paginator">
    <el-pagination
      :page-size="5"
      background
      layout="prev, pager, next"
      :total="100"
      @current-change="(el)=>current(el)"
    />
  </div>
</template>

<script>
  export default {
    name: 'Paginator',
    methods: {
      current (page) {
        this.$emit('changePage', page)
      }
    }
  }
</script>

<style  scoped>

  .paginator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

</style>
