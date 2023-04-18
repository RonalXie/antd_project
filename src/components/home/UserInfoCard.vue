<template>
  <div>
      <a-card style="text-align: center;height: 280px" :bordered="false" hoverable>
              <div>
                  <a-avatar :size="96" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"></a-avatar>
              </div>
          <a-space direction="vertical">
              <div>
                  <h1>RonalXie</h1>
              </div>
              <div>
                  <h4>一年之计在于春，一日之计在于晨。</h4>
              </div>
              <div>
                  <a-icon type="home" />&nbsp;四川省成都市
              </div>
              <div>
                  <a-space size="large">
                      <div>
                          <div>文章</div>
                          <div>18</div>
                      </div>
                      <div>
                          <div>文章</div>
                          <div>18</div>
                      </div>
                      <div>
                          <div>文章</div>
                          <div>18</div>
                      </div>
                  </a-space>
              </div>

          </a-space>
      </a-card>
  </div>

</template>

<script>
export default {
    name: "UserInfoCard"
}
</script>

<style scoped>
.user-info-bottom{
    font-size: 18px;
}

</style>
