<template>
    <div class="home">
        <HeadCard/>
        <br/>
        <a-row :gutter="16">
            <a-col :span="18">
                <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
                    <a-row :gutter="16">
                        <a-col :span="8" v-for="i in 16" :key="i">
                            <ContentCard></ContentCard>
                        </a-col>
                    </a-row>
                </div>
            </a-col>
            <a-col :span="6">
                <a-card>
                    热门文章
                </a-card>
            </a-col>

        </a-row>
  </div>
</template>

<script>

import ContentCard from "@/components/home/ContentCard.vue";
import HeadCard from "@/components/home/HeadCard.vue";


export default {
    name: 'HomeView',
    components: {
        HeadCard,
        ContentCard
    }
}
</script>
<style scoped>
.head-content {
    padding: 0;
}
</style>
