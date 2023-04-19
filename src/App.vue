<template>
    <div id="app">
        <DefaultLayout>
            <router-view/>
        </DefaultLayout>
    </div>
</template>

<style>
#app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;*/
    font-family:"Microsoft Yahei","幼圆","黑体",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
<script setup>
import DefaultLayout from "@/layout/DefaultLayout.vue";
</script>
