<template>
  <el-container>
    <Header />
    <Nuxt />
  </el-container>
</template>

<style lang="scss">
  html {
    font-family: 'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .el-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
  }

  .header {
    display: flex;
    justify-content: center;
    align-content: center;
  }

</style>
<script>
  import Header from '../components/Header/Header'

  export default {
    components: { Header }
  }
</script>
