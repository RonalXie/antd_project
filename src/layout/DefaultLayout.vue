<template>
    <a-layout id="components-layout-demo-top" class="layout">
        <DefaultHeader/>
        <a-layout-content style="padding: 0 180px;margin-top: 24px;margin-bottom: 24px">
            <div>
                <router-view/>
            </div>
        </a-layout-content>
        <DefaultFooter/>
    </a-layout>
</template>
<style>

</style>
<script setup>
import DefaultHeader from "@/components/headers/DefaultHeader.vue";
import DefaultFooter from "@/components/footers/DefaultFooter.vue";
</script>
