<template>
  <div>
      <a-card :bordered="false">
        <a-input-search></a-input-search>
      </a-card>
      <br/>
      <a-row :gutter="16">
          <a-col :span="6" v-for="i in 20" :key="i">
              <ContentCard></ContentCard>
          </a-col>
      </a-row>
  </div>
</template>

<script>
import ContentCard from "@/components/home/ContentCard.vue";

export default {
    name: "PictureVIew",
    components: {ContentCard}
}
</script>

<style scoped>

</style>
