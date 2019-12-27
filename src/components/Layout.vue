<template>
  <div>
    <el-container>
        <el-header>
            <h1 class="nickName">Best Wu</h1>
            <h1 class="vx">VX: 1227321179</h1>
        </el-header>
        <el-container>
            <el-aside>
                <Menu/>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
            </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './Menu'
export default {
    name: 'Layout',
    components: {
        Menu
    }
}
</script>

<style scoped>
.el-header {
    background-color: #545c64;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
}

.el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
}
  
.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: left;
    height: calc(100vh - 60px);
    width: 300px;
}
  
.el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
}

.nickName {
    float: left;
    color: white;
}
.vx {
    float: right;
    color: white;
}

</style>