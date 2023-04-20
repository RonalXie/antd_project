<template>
  <div class="edit-container">
    <a-modal v-model="visible" title="添加标签" @ok="handleOk">
      <a-input placeholder="" size="large"/>
    </a-modal>
    <div>
      <div>标题</div>
      <a-input v-model="title_value"></a-input>
      <br/>
      <br/>
      <div>正文</div>
      <EditorCard @getEditor="doEditor"/>
      <br/>
      <div>摘要</div>
      <div>
        <a-textarea placeholder="摘要" :rows="4" v-model="abs_value"/>
      </div>
      <br/>
      <div>标签</div>
      <div>
        <a-row :gutter="16">
          <a-col :span="6">
            <a-select mode="multiple" style="width: 100%" placeholder="Tags Mode" @change="handleChange"
                      :maxTagTextLength="2">
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6">
            <a-button type="dashed" style="width: 100%" @click="visible=true">
              <a-icon type="plus"/>
              添加标签
            </a-button>
          </a-col>
        </a-row>
      </div>
      <br/>
      <div>封面图</div>
      <div>
        <UploadCover></UploadCover>
      </div>
      <a-divider/>
      <div style="text-align: right">
        <a-button type="primary">发布</a-button>
      </div>
    </div>

  </div>
</template>

<script>
import EditorCard from "@/components/admin/EditorCard.vue";
import UploadCover from "@/components/admin/UploadCover.vue";

export default {
  name: "EditArticle",
  components: {
    EditorCard,
    UploadCover
  },
  data() {
    return {
      visible: false,
      title_value: "",
      abs_value: "",
    }
  },
  methods: {
    handleChange(value, option) {
      if (option.length <= 2) {
        console.log(`selected ${value}`, option.length);
      } else {
        this.$message.warn("最多只能选择两个标签！", 3)
      }
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    doEditor(editor) {
      console.log(editor.getText())
      this.abs_value = editor.getText().slice(0, 200);
    }
  }
}
</script>

<style scoped>
.edit-container {


}
</style>

