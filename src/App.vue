<template>
  <div id="app">
       <Nav/>
       
       <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";


export default {
  name: "app",
  components: {
    Nav
    
  }
};
</script>

<style>
h2 {
  color: #00796b;
}
</style>
