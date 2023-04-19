<template>
  <div class="tag-card">
      <div style="text-align: center">
          <a-tag v-for="(index) in 10" :key="index" style="margin: 5px">
              orange
          </a-tag>
      </div>
  </div>
</template>

<script>
export default {
    name: "TagSetCard"
}
</script>

<style scoped>
.tag-card{
  /*background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);*/
  padding: 16px;
  /*background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);*/
  background-image: linear-gradient(60deg, #a8edea 0%, #fed6e3 100%);


}

</style>
