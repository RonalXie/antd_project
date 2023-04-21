<template>
  <div>
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
          <a-col :span="16">
              <div>
                  <div>昵称</div>
                  <a-input></a-input>
                  <br/>
                  <br/>
                  <div>年龄</div>
                  <a-input></a-input>
                  <br/>
                  <br/>
                  <div>个性签名</div>
                  <a-textarea></a-textarea>
                  <br/>
                  <br/>
                  <div>地区</div>
                  <a-input></a-input>
                  <br/>
                  <br/>
              </div>
          </a-col>
          <a-col :span="8" style="text-align: center">
              <div>
                  <a-avatar :size="96" src="https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171"/>
                  <br/>
                  <br/>
                  <div>
                      <a-upload
                              name="file"
                              :multiple="true"
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              :headers="headers"
                              @change="handleChange"
                      >
                          <a-button> <a-icon type="upload" /> 点击上传 </a-button>
                      </a-upload>
                  </div>

              </div>
          </a-col>
      </a-row>

      <a-button type="primary">保存</a-button>


  </div>

</template>

<script>
export default {
    name: "ManageUser",
    data() {
        return {
            headers: {
                authorization: 'authorization-text',
            },
        };
    },
    methods: {
        handleChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.$message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        },
    },
}
</script>

<style scoped>

</style>
