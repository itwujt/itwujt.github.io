<template>
  <div>
      <el-row class="tac">
        <el-col :span="24">
            <el-menu
            default-active="1-1" 
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <!-- menu 第一栏 -->
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>Java 基础</span>
                    </template>
                    <el-menu-item index="1-1" @click="routeHandler('1-1')">基础语法</el-menu-item>
                    <el-menu-item index="1-2" @click="routeHandler('1-2')">类与对象</el-menu-item>
                    <el-menu-item index="1-3">接口</el-menu-item>
                    <el-menu-item index="1-4">BIO</el-menu-item>
                    <el-menu-item index="1-5">NIO</el-menu-item>
                    <el-menu-item index="1-6">AIO</el-menu-item>
                    <!-- 日后添加 在此补充 -->
                </el-submenu>

                <!-- menu 第二栏 -->
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>设计模式</span>
                    </template>
                    <el-menu-item index="2-1" @click="routeHandler('2-1')">单例设计模式</el-menu-item>
                    <el-menu-item index="2-2">工厂模式</el-menu-item>
                    <!-- 日后添加 在此补充 -->
                </el-submenu>
                
                <!-- menu 第三栏 -->
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>NoSql</span>
                    </template>
                    <el-menu-item-group title="Redis">
                        <el-menu-item index="3-1">简介</el-menu-item>
                        <el-menu-item index="3-2">分布式锁</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="MongoDB">
                        <el-menu-item index="3-3">简介</el-menu-item>
                    </el-menu-item-group>
                    <!-- 日后添加 在此补充 -->
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import router from '../router'
export default {
    name: 'Menu',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      routeHandler(index) {
          alert(index)
          switch(index) {
              case '1-1': 
                router.push("/java");
                break;
              case '1-2': 
                router.push("/java/co");
                break;
              case '2-1':
                router.push("/dp/singleton");
          }
          
      }
    }
}
</script>

<style>

</style>