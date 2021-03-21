<template>
  <el-row class="game-card">
    <el-card :body-style="{ padding: '0px' }">
      <el-col :span="3" class="game-card_left">
        <el-image v-if="gamedata.photoUrl" class="game-card_image" :src="gamedata.photoUrl"/>
      </el-col>
      <el-col :span="21" class="game-card_right">
        <div class="game-card_title">
          <NuxtLink v-if="gamedata.alias" :to="'/game/'+ gamedata.alias">
            <h1>{{ gamedata.title }}</h1>
          </NuxtLink>
          <h1 v-else>{{ gamedata.title }}</h1>
        </div>

        <div class="game-card_description">
          {{ gamedata.descriptionShort }}
        </div>
      </el-col>
    </el-card>
  </el-row>
</template>

<script>
  export default {
    name: 'Card',
    props: ['gamedata']
  }
</script>

<style lang="scss" scoped>

  .game-card {

    &_right {
      padding: 15px;
    }

    margin-bottom: 20px;
  }

</style>
