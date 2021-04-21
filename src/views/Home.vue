<template>
  <div class="home">
    <img @click="enterApp" alt="map-home" src="@/assets/preview.png">
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

img {
  width: 100%;
  height: auto;
}
</style>
