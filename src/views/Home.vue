<template>
  <div class="home">
    <img class="homeimage" @click="enterApp" alt="map-home" src="@/assets/preview.png">
    <el-button @click="enterApp" icon="el-icon-caret-right" circle id="home-button"></el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods:{
    enterApp(){
      this.$router.push("/map")
    }
  }
}
</script>

<style>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #040810;
}

.homeimage {
  width: 90vw;
  height: auto;
}

.home #home-button {
  position: absolute;
  width: 40px;
  height: 100px;
  top: 50%;
  left: 92%;
  text-align: center;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: black;
  font-size: 20px;
  padding: 0px;
  border-color:orange;
  cursor: pointer;
  border-radius: 5px;
}

.el-icon-caret-right {
    color: orange;
}

.el-icon-caret-right:hover {
    color: white;
}

</style>
