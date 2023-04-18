<template>
  <div>
    <div class="article-card">
      <img
          width="100%"
          height="260"
          alt="example"
          style="border-top-left-radius: 10px;border-top-right-radius: 10px;object-fit: fill;"
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/bootstrap-vue-argon-dashboard-pro/opt_badp_thumbnail.jpg"
      />
      <div style="padding: 10px">
        <div>
          <span class="article-title">this is title</span>
        </div>
        <div style="margin-bottom: 10px">
          <a-row type="flex" justify="space-around" align="middle" :gutter="16">
            <a-col :span="3">
              <a-avatar style="float: left"
                        src="https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171"/>
            </a-col>
            <a-col :span="7" style="text-align: left">
              <span>Ronalxie</span>
            </a-col>
            <a-col :span="14" style="text-align: right">
              <span><a-icon type="calendar"/>&nbsp;2023-04-18 18:58:50</span>
            </a-col>
          </a-row>
        </div>
        <div>
          <a-row :gutter="16">
            <a-col :span="14" style="text-align: left">
              <a-space>
                <a-tag color="red">Java</a-tag>
                <a-tag>Python</a-tag>
              </a-space>
            </a-col>
            <a-col :span="10">
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
  </div>
</template>

<script>
export default {
  name: "ArticleCard"
}
</script>

<style scoped>
.article-card {

  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
}

.article-title {
  font-size: 24px;
}

.article-card:hover {
  /*width: 340px;*/
  /*transition: width 1s, height 1s;*/
}

</style>