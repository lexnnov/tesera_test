<template>
  <el-pagination
    v-if="pages"
    class="pagination"
    background
    layout="prev, pager, next"
    :page-count="pages-1"
    :current-page="currentPage"
    @current-change="(el)=>current(el)"
  />
</template>

<script>
  export default {
    name: 'Pagination',
    props: ['pages', 'currentPage'],
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
