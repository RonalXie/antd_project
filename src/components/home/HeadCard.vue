<template>
    <div>
        <a-row :gutter="16">
            <a-col :span="18">
                <CarouselCard/>
            </a-col>
            <a-col :span="6">
                <UserInfoCard/>
            </a-col>

        </a-row>
    </div>
</template>

<script>
import CarouselCard from "@/components/headers/CarouselCard.vue";
import UserInfoCard from "@/components/home/UserInfoCard.vue";

export default {
    name: "HeadCard",
    components: {UserInfoCard, CarouselCard}
}
</script>

<style scoped>

</style>
