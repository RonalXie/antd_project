<template>
    <div class="home">
        <HeadCard/>
        <br/>
        <a-row :gutter="16">
            <a-col :span="18">
                <div :style="{ background: '#fff', padding: '24px', minHeight: '280px'}">
                    <a-row :gutter="16">
                        <a-col :span="8" v-for="i in 16" :key="i">
                            <ArticleCard/>
                        </a-col>
                    </a-row>
                </div>
            </a-col>
            <a-col :span="6">
              <HotArticleCard/>
            </a-col>

        </a-row>
  </div>
</template>

<script>

import HeadCard from "@/components/home/HeadCard.vue";
import ArticleCard from "@/components/home/ArticleCard.vue";
import HotArticleCard from "@/components/home/HotArticleCard.vue";


export default {
    name: 'HomeView',
    components: {
      HotArticleCard,
      ArticleCard,
        HeadCard,
    }
}
</script>
<style scoped>
.head-content {
    padding: 0;
}
</style>
