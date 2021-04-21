<template>
<div class="hero-layout">
   <el-container>
    <el-header>Header</el-header>
    <el-main>
<el-aside width="225px">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;">
  <el-radio-button :label="false"><i class="el-icon-arrow-right"></i></el-radio-button>
  <el-radio-button :label="true"><i class="el-icon-close"></i></el-radio-button>
</el-radio-group>
<el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template #title>
      <i class="el-icon-map-location"></i>
      <span>DATA MAPPING</span>
    </template>
    <el-submenu index="1-3">
      <template #title><span>NORTHEAST U.S.</span></template>
      <el-menu-item index="1-1-1">NEW YORK</el-menu-item>
      <el-menu-item index="1-2-1">NEW JERSEY</el-menu-item>
      <el-menu-item index="1-3-1">MASS</el-menu-item>
    </el-submenu>
    <el-submenu index="1-6">
      <template #title><span>SOUTHERN U.S.</span></template>
      <el-menu-item index="1-4-1">FLORIDA</el-menu-item>
      <el-menu-item index="1-5-1">TENNESSEE</el-menu-item>
      <el-menu-item index="1-6-1">TEXAS</el-menu-item>
    </el-submenu>
    <el-submenu index="1-9">
      <template #title><span>MIDWESTERN U.S.</span></template>
      <el-menu-item index="1-7-1">MINNESOTA</el-menu-item>
      <el-menu-item index="1-8-1">ILLINOIS</el-menu-item>
      <el-menu-item index="1-9-1">KANSAS</el-menu-item>
    </el-submenu>
    <el-submenu index="1-12">
      <template #title><span>WESTERN U.S.</span></template>
      <el-menu-item index="1-10-1">CALIFORNIA</el-menu-item>
      <el-menu-item index="1-11-1">WASHINGTON</el-menu-item>
      <el-menu-item index="1-12-1">OREGON</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-s-data"></i>
    <template #title>DATA ANALYSIS</template>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-coin"></i>
    <template #title>DATA CLUSTERS</template>
  </el-menu-item>
</el-menu>
      </el-aside>

    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String
  },
  data() {
      return {
          isCollapse: true
      };
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 
.hero-layout{
    width: 100%;
    height: 800px;
    background-color: red;
    color: black;
} */

.el-header {
    background-color: rgb(22, 22, 22);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color:blue;
    color: #333;
    width: 100%;
    height: 800px;
    text-align: center;
    line-height: 160px;
  }

    .el-aside {
    background-color: black;
    color: white;
    text-align: center;
    line-height: 50px;
  }

</style>
