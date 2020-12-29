<template>
  <div class="dashboard">
    <UserNavigation class="user-navigation"></UserNavigation>
    <XmlNavigation class="xml-navigation"></XmlNavigation>
    <MenuNavigation class="menu-navigation"></MenuNavigation>
    <ModelsNavigation class="model-navigation"></ModelsNavigation>
    <div class="center-info">

      <div class="icons-search">
        <ul class="ul-icons">
          <i class="fas fa-chevron-circle-left"></i>
          <i class="fas fa-search"></i>
         <i class="fas fa-chevron-circle-right"></i>
        </ul>
      </div>
      <div class="cards-routers">
        <div class="cards"   v-for="model in AllPairing" v-bind:key="model.id">
          <div class="imgen-r">
            <img class="img-size" src="https://www.netgear.es/images/support/networking/Orbi/RBK12-Hero-Transparent.png" alt="">
          </div>
          <div class="footer-card">
            <h4>{{model.model}}</h4>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import UserNavigation from '@/components/module_menus/UserNavigation.vue'
  import XmlNavigation from '@/components/module_menus/XmlNavigation.vue'
  import MenuNavigation from '@/components/module_menus/MenuNavigation.vue'
  import ModelsNavigation from '@/components/module_menus/ModelsNavigation.vue'
  
  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";
  
  export default {
    name: 'dashboard',
    components: {
      UserNavigation,
      XmlNavigation,
      MenuNavigation,
      ModelsNavigation

    },
     computed: {
      ...mapState({
        AllPairing: "AllPairing"
      })
    },
  }
</script>
<style scope>
  @import "../assets/css/global.css";
   @import "../assets/css/xmlConfiguration.css";
</style>