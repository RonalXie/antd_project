<template>
  <a-card :bordered="false">
      <div style="text-align: center">
          <a-tag color="orange" v-for="(index) in 10" :key="index" style="margin: 5px">
              orange
          </a-tag>
      </div>
  </a-card>
</template>

<script>
export default {
    name: "TagSetCard"
}
</script>

<style scoped>

</style>
