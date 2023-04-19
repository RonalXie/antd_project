<template>
    <a-carousel :after-change="onChange" autoplay>
        <div>
            <TopArticleCard/>
        </div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </a-carousel>
</template>
<script>
import TopArticleCard from "@/components/headers/TopArticleCard.vue";

export default {
    components: {TopArticleCard},
    methods: {
        onChange(a, b, c) {
            console.log(a, b, c);
        },
    },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
    height: 280px;
    overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
    color: #fff;
}
</style>
