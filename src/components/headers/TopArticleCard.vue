<template>
    <div class="top-card">
        <a-row>
            <a-col :xxl="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
                <img
                        height="280"
                        width="100%"
                        alt="example"
                        src="https://cdn.dribbble.com/userupload/6348012/file/original-2062378b0fb8304f707375e996f03b53.png?compress=1&resize=400x300&vertical=top"
                />
            </a-col>
            <a-col :xxl="16" :xl="16" :lg="16" :md="24" :sm="24" :xs="24">
                <div style="padding: 16px;height:280px;width:100%;position: relative">
                    <div style="font-size: 28px">
                        This is title
                    </div>
                    <div>
                        this is introduction
                    </div>
                    <div style="position:absolute;bottom: 15px;width: 100%" class="top-article-content">
                        <a-row type="flex" justify="space-around" align="middle" :gutter="16">
                            <a-col :span="2">
                                <a-avatar style="float: left"
                                          src="https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171"/>
                            </a-col>
                            <a-col :span="8" style="text-align: left">
                                <span>Ronalxie</span>
                            </a-col>
                            <a-col :span="8" style="text-align: right">
                                <span><a-icon type="calendar"/>&nbsp;2023-04-18</span>
                            </a-col>
                            <a-col :span="6">
                                <a-button type="primary">阅读更多</a-button>
                            </a-col>
                        </a-row>
                    </div>

                </div>

            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    name: "TopArticleCard"
}
</script>

<style scoped>
.top-card{
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
    /*background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);*/
  /*background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);*/
  /*background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);*/
  /*background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);*/
  /*background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%);*/
  /*background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);*/
  background-image: linear-gradient(60deg, #a8edea 0%, #fed6e3 100%);


}

</style>
