<template>
<div class="common-layout">
   <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="300px">Aside</el-aside>
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
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
</style>
