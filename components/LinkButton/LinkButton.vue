<template>
  <NuxtLink :to="link">
    <el-button type="primary">
      {{buttonText}}
    </el-button>
  </NuxtLink>
</template>

<script>
  export default {
    name: 'LinkButton',
    props: ['link', 'buttonText']
  }
</script>

<style scoped>

</style>
