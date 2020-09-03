<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">home</router-link>   |
      <router-link to="/sider">sider</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style scoped>


</style>

