<template>
  <el-row>
    <el-card :body-style="{ padding: '0px' }">
      <el-col :span=" 3">
        <el-image
          :src="gamedata.photoUrl"
        ></el-image>
      </el-col>
      <el-col :span=" 15">
        <div style="padding: 14px;">
          <NuxtLink :to="'/'+gamedata.alias">
            <h1>{{ gamedata.title }}</h1>
          </NuxtLink>
          <p>{{ gamedata.descriptionShort }}</p>
          <div class="bottom clearfix">
            <time class="time"/>
          </div>
        </div>
      </el-col>

    </el-card>
  </el-row>
</template>

<script>
  export default {
    name: 'Card',
    props: ['gamedata', 'index'],
    data () {
      return {
        show: false
      }
    },
    computed: {
      delay () {
        return 0.5 * this.index + 's'
      }
    }
  }
</script>

<style scoped>
  .card {
    opacity: 0;
    transition: 0.5s;
  }

  .loaded {
    opacity: 1;
    transition: 3.5s;
  }

  .el-row {
    margin-bottom: 20px;
  }

  el-row:last-child {
    margin-bottom: 0;

  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
