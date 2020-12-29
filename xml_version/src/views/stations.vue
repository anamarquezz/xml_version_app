<template>
  <div class="dashboard">
    <UserNavigation class="user-navigation"></UserNavigation>
    <XmlNavigation class="xml-navigation"></XmlNavigation>
    <div class="menu-navigation"></div>
    <div class="model-navigation">🐢</div>
    <div class="center-info">🦊 aqui cosas del stations</div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import UserNavigation from '@/components/module_menus/UserNavigation.vue'
  import XmlNavigation from '@/components/module_menus/XmlNavigation.vue'

  


  export default {
    name: 'dashboard',
      components: {
      UserNavigation,
      XmlNavigation,
     
    
    }
  }
</script>
<style scope>
 @import "../assets/css/global.css";
</style>