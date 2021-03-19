<template>
  <el-pagination
    class="pagination"
    :page-size="5"
    background
    layout="prev, pager, next"
    :total="100"
    @current-change="(el)=>current(el)"
  />
</template>

<script>
  export default {
    name: 'Pagination',
    methods: {
      current (page) {
        this.$emit('changePage', page)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

</style>
