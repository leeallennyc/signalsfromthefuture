<template>
<div class="common-layout">
   <el-container>
    <el-header>
      <i class="el-icon-more-outline"></i>
      MAPPING AI PATENT LANDSCAPES
    </el-header>
    <el-container>
      <el-aside width="225px">Aside</el-aside>
      <el-container>
        <el-main>
        <img class="logo" alt="Vue logo" src="./assets/logo.png">
          <HelloWorld :msg="msg"/>
            <div class="btn">
              <el-button type="primary" @click="startHacking">
              Get Started
            </el-button>
          </div>
          </el-main>
        <el-footer>Footer</el-footer>
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
  setup() {
    const msg = ref("Welcome to Element Plus, a Vue 3.0 based component library")
    const startHacking = () => {
      msg.value = "Start coding with Element Plus with 💖"
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 50%;
}
.btn {
  margin-top: 100px;
}
 .el-header {
    background-color: black;
    font-family: 'Futura','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: floralwhite;
    text-align: left;
    line-height: 60px;
  }
  .el-aside {
    background-color: floralwhite;
    color: darkslategray;
    text-align: center;
    opacity: 100%;
    border: solid black .5px;
    line-height: 200px;
  }
  .el-footer {
    background-color: white;
    color: black;
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
</style>
