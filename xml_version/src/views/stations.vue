<template>
  <div class="dashboard">
    <UserNavigation class="user-navigation"></UserNavigation>
    <XmlNavigation class="xml-navigation"></XmlNavigation>
    <div class="menu-navigation"></div>
    <div class="model-navigation">🐢</div>
    <div class="center-info">
      <configuration></configuration>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import UserNavigation from '@/components/module_menus/UserNavigation.vue'
  import XmlNavigation from '@/components/module_menus/XmlNavigation.vue'

  
  import configuration from '@/components/module_families/configuration.vue'


  export default {
    name: 'dashboard',
      components: {
      UserNavigation,
      XmlNavigation,
     configuration
    
    }
  }
</script>
<style scope>
 @import "../assets/css/global.css";
</style>