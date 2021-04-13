<template>
<div class="common-layout">
    <el-container>
    <el-header>MAPPING AI PATENT LANDSCAPES</el-header>
    <el-container>
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
      <el-container>
        <el-main>
        <img class="logo" alt="preview" src="./assets/preview.png">
          <HelloWorld :msg="msg"/>
            <div class="btn">
              <el-button type="primary" @click="startHacking">
              Enter Map
            </el-button>
          </div>
          </el-main>

<el-menu class="el-menu-inner-aside" 
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-submenu index="1">
          <template #title><i class="el-icon-map-location"></i>DATA MAPPING</template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>Option4</template>
          <el-menu-item index="1-4-1">Option 4.1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template #title><i class="el-icon-s-data"></i>DATA ANALYSIS</template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template #title>Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template #title><i class="el-icon-coin"></i>DATA CLUSTERS</template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template #title>Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

        <el-footer><i class="el-icon-info"></i></el-footer>
      </el-container>
    </el-container>
  </el-container>
</div>
</template>
<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

  setup() {
    const msg = ref("Hit the Enter Map Button below")
    const startHacking = () => {
      msg.value = "Button has been activated"
    }
    return {
      msg,
      startHacking
    }
  }
}
</script>

<style>
#app {
  font-family: Futura, Helvetica, Arial, sans-serif;
  background-color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 50%;
}
.btn {
  margin-top: 50px;
}
 .el-header {
    background-color: black;
    border: solid gray 0.5px;
    font-family: 'Futura','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:orange;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: black;
    color: white;
    text-align: center;
    line-height: 50px;
  }
  .el-footer {
    background-color: black;
    color: white;
    border: solid grey .5px;
    text-align: center;
    line-height: 60px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 200px;
  }
  .el-icon-more-outline {
    color: orange;
    align-items: left;
  }
  .el-icon-map-location {
    color: orange;
  }
  .el-icon-info {
    align-items: right;
  }
  .el-menu{
    background-color: black;
    font-family: 'Futura','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-radio-button__inner{
    background-color: black;
    padding: 7px 35px;
    color: rgb(249, 244, 244);
    border-left:0;
    border-left-width: 1px;
    border-left-color: white;
    border-left-style: solid;
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    background-color: black;
    padding: 7px 35px;
    border-color: orange;
    color: white;
  } 

  .el-submenu__title{
    color: grey;
  }

  .el-menu-item.is-active{
    color: orange;
  } 



</style>

