<template>
  <div class="card-container">
    <a-tabs tabPosition="left">
      <a-tab-pane key="1">
                <span slot="tab">
                    <a-icon type="user"/>
                    个人中心
                </span>
                <ManageUser/>
      </a-tab-pane>
      <a-tab-pane key="2">
                <span slot="tab">
                    <a-icon type="edit"/>
                    创作文章
                </span>
        <EditArticle/>
      </a-tab-pane>
      <a-tab-pane key="3">
                <span slot="tab">
                    <a-icon type="book"/>
                    文章管理
                </span>
        <ManageArticle/>
      </a-tab-pane>
      <a-tab-pane key="4">
                <span slot="tab">
                    <a-icon type="picture"/>
                    图库管理
                </span>
        <ManagePicture/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import EditArticle from "@/components/admin/EditArticle.vue";
import ManageArticle from "@/components/admin/ManageArticle.vue";
import ManagePicture from "@/components/admin/ManagePicture.vue";
import ManageUser from "@/components/admin/ManageUser.vue";

export default {
  components: {ManageUser, ManagePicture, ManageArticle, EditArticle},
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
<style scoped>
.card-container {
  background: #fff;
  overflow: hidden;
  padding: 24px;
}
</style>
