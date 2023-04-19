<template>
    <div class="bg-img">
        <div>
            <div>
                <a-avatar :size="96"
                          src="https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171"/>
            </div>
            <div>
                <h1>RonalXie</h1>
            </div>
        </div>
        <a-space direction="vertical">
            <div>
                <h4>一年之计在于春，一日之计在于晨。</h4>
            </div>
            <div>
                <a-icon type="home"/>&nbsp;四川省成都市
            </div>
            <div class="user-info-bottom">
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
    </div>
</template>

<script>
export default {
    name: "UserInfoCard"
}
</script>

<style scoped>
.user-info-bottom {
    font-size: 18px;
}

.bg-img {
    /*background-image: linear-gradient(#fff, #83e2ee);*/
    /*background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);*/
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
    /*background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);*/
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    text-align: center;
    height: 280px;
    padding: 16px;
}

</style>
