<template>
    <div class="card-container">
        <a-tabs>
            <a-tab-pane key="1">
                <span slot="tab">
                    <a-icon type="edit"/>
                    写文章
                </span>

                <EditArticle/>
            </a-tab-pane>
            <a-tab-pane key="2">
                <span slot="tab">
                    <a-icon type="book"/>
                    文章管理
                </span>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
            </a-tab-pane>
            <a-tab-pane key="3">
                <span slot="tab">
                    <a-icon type="picture"/>
                    图库管理
                </span>
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
import EditArticle from "@/components/admin/EditArticle.vue";

export default {
    components: {EditArticle},
    data() {
        return {};
    },
    methods: {
        callback(key) {
            console.log(key);
        },
    },
};
</script>
<style>
.card-container {
    background: #fff;
    overflow: hidden;
    padding: 24px;
}
</style>
