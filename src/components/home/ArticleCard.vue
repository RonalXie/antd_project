<template>
  <div>
      <a-skeleton :loading="loading" active>
          <div class="article-card">
              <img
                      width="100%"
                      height="200"
                      alt="example"
                      style="object-fit: fill;"
                      src="https://cdn.dribbble.com/userupload/6363019/file/original-6851ee9ca243b20a737712c214a7861a.png?compress=1&resize=450x338&vertical=top"
              />
              <div style="padding: 10px">
                  <div>
                      <span class="article-title">this is title</span>
                  </div>
                  <div style="margin-bottom: 10px">
                      <a-row type="flex" justify="space-around" align="middle" :gutter="16">
                          <a-col :span="4">
                              <a-avatar style="float: left"
                                        src="https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171"/>
                          </a-col>
                          <a-col :span="5" style="text-align: left">
                              <span>Ronalxie</span>
                          </a-col>
                          <a-col :span="15" style="text-align: right">
                              <span><a-icon type="calendar"/>&nbsp;2023-04-18</span>
                          </a-col>
                      </a-row>
                  </div>
                  <div>
                      <a-row :gutter="16">
                          <a-col :span="12" style="text-align: left">
                              <a-space>
                                  <a-tag color="red">Java</a-tag>
                                  <a-tag>Python</a-tag>
                              </a-space>
                          </a-col>
                          <a-col :span="12">
                              <div style="text-align: right;font-size: 12px">
                        <span>
                        <a-icon type="heart" style="margin-right: 3px"/>
                        128
                        </span>
                                  <a-divider type="vertical"></a-divider>
                                  <span>
                        <a-icon type="eye" style="margin-right: 3px"/>
                        128
                        </span>
                              </div>

                          </a-col>


                      </a-row>
                  </div>
              </div>
          </div>
      </a-skeleton>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
    data(){
      return{
          loading:true
      }
    },
    mounted() {
      this.loading=false
    }
}
</script>

<style scoped>
.article-card {
  margin-bottom: 30px;
  cursor: pointer;

  /*background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);*/
  background-image: linear-gradient(60deg, #a8edea 0%, #fed6e3 100%);

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);

}

.article-title {
  font-size: 24px;
}

.article-card:hover {
  /*width: 340px;*/
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /*transition: width 4s, height 1s;*/
  transition: 1s;

}

</style>
