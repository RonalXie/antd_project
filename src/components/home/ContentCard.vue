<template>
    <div class="parent-container">
        <div
            @mouseenter="isDisplay=!isDisplay"
            @mouseleave="isDisplay=!isDisplay"
        >
            <img
                alt="example"
                height="240"
                width="320"

                style="border-radius: 10px"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/bootstrap-vue-argon-dashboard-pro/opt_badp_thumbnail.jpg"
            />
            <div class="info" v-if="isDisplay">
                这是标题
            </div>
        </div>
        <div class="action">
            <a-row type="flex" justify="space-around" align="middle">
                <a-col :span="3">
                    <a-avatar style="float: left" src="https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171"/>
                </a-col>
                <a-col :span="10" style="float: left">
                    <a-space>
                        <span>ronalxie</span>
                        <a-tag>Java</a-tag>
                        <a-tag>Python</a-tag>
                    </a-space>

                </a-col>
                <a-col :span="11">
                    <div style="float: right;font-size: 12px">
                        <span>
                        <a-icon type="heart" style="margin-right: 3px" />
                        128
                        </span>
                        <a-divider type="vertical"></a-divider>
                        <span>
                        <a-icon type="eye" style="margin-right: 3px" />
                        128
                        </span>
                    </div>

                </a-col>
            </a-row>

        </div>
    </div>
</template>
<script>
export default {
    name: "ContentCard",
    data() {
        return {
            isDisplay: false
        }
    }
}
</script>

<style scoped>
.parent-container {
    position: relative;
    margin-bottom: 30px;
    cursor: pointer;

}

.info {
    position: absolute;
    bottom: 40px;
    width: 320px;
    height: 50px;
    opacity: 0.3;
    background: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
    font-size: 20px;
    padding: 8px;


}

.action {
    width: 320px;
    height: 35px;
    margin-top: 5px;
}


</style>
