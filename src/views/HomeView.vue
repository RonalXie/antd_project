<template>
    <div class="home">
        <HeadCard/>
        <br/>
        <a-row :gutter="16">
            <a-col :xxl="18" :xl="18" :lg="18" :md="24" :sm="24" :xs="24">
                <div :style="{  minHeight: '280px'}">
                    <a-row :gutter="16">
                        <a-col :xxl="6" :xl="8" :lg="8" :md="12" :sm="24" :xs="24" v-for="i in 15" :key="i">
                            <ArticleCard/>
                        </a-col>
                    </a-row>
                    <div style="text-align: center">
                        <a-pagination :current="current" :defaultPageSize="16" :total="500" @change="onChange"/>
                    </div>
                </div>
            </a-col>
            <a-col :xxl="6" :xl="6" :lg="6" :md="24" :sm="24" :xs="24">
                <HotArticleCard/>
                <TagSetCard/>
            </a-col>

        </a-row>
    </div>
</template>

<script>

import HeadCard from "@/components/home/HeadCard.vue";
import ArticleCard from "@/components/home/ArticleCard.vue";
import HotArticleCard from "@/components/home/HotArticleCard.vue";
import TagSetCard from "@/components/home/TagSetCard.vue";


export default {
    name: 'HomeView',
    components: {
        TagSetCard,
        HotArticleCard,
        ArticleCard,
        HeadCard,
    },
    data(){
      return{
          current:3
      }
    },
    methods: {
        onChange(current) {
            this.current = current;
        },
    },
}
</script>
<style scoped>
.head-content {
    padding: 0;
}
</style>
