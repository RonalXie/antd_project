<template>
    <div>
        <a-row :gutter="16">
            <a-col :xxl="18" :xl="18" :lg="18" :md="24" :sm="24" :xs="24">
                <TopArticleCard/>
            </a-col>
            <a-col :xxl="6" :xl="6" :lg="6" :md="24" :sm="24" :xs="24">
                <UserInfoCard/>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import UserInfoCard from "@/components/home/UserInfoCard.vue";
import TopArticleCard from "@/components/headers/TopArticleCard.vue";

export default {
    name: "HeadCard",
    components: {TopArticleCard, UserInfoCard, }
}
</script>

<style scoped>
.box-menu{
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
}
.box-menu-one{
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
}
.box-menu-two{
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.box-menu-three{
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
.box-menu h1{
    color: #ffffff;
    font-size: 36px;
}

</style>
