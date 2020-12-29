<template>
  <div class="dashboard">
    <UserNavigation class="user-navigation"></UserNavigation>
    <XmlNavigation class="xml-navigation"></XmlNavigation>
    <div class="dashboard-center">      
        <div class="title">WELCOME TO XML CONFIGURATION MADE BY RECONEXT</div>
        <div class="options">      
           <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        </div>
       
      
    </div>
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
      XmlNavigation
    }
  }
</script>
<style scoped>
  @import "../assets/css/global.css";

  .options{
    /*display: grid;
     grid-template-areas: 
        "😺 😺 😺"
        "🐢 🐷 🦄"
        "🐢 🐷 🦄"
        "🐢 🐷 🦄";  
        width: 100vw;
        height: 100vh;              
        grid-template-rows:  15% 15% 5% 1fr;*/

       display:flex ; 
  }

.options{
  flex:0 1 150px;
  margin:5px;
  background-color:palegreen;
}
  


</style>