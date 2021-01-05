<template>
  <div class="dashboard">
    <UserNavigation class="user-navigation"></UserNavigation>
    <XmlNavigation class="xml-navigation"></XmlNavigation>
    <MenuNavigation class="menu-navigation"></MenuNavigation>
    <ModelsNavigation class="model-navigation"></ModelsNavigation>
    <div class="center-info">
      <families></families>           
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import UserNavigation from '@/components/module_menus/UserNavigation.vue'
  import XmlNavigation from '@/components/module_menus/XmlNavigation.vue'
  import MenuNavigation from '@/components/module_menus/MenuNavigation.vue'
  import ModelsNavigation from '@/components/module_menus/ModelsNavigation.vue'

  // Families:
  import families from '@/components/module_families/Families.vue'

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
      ModelsNavigation,
      families      
    },
    data() {
      return {
       page: 1,
       size: 6,
       pageLength: 3
      }
    },
    computed: {
      ...mapState({
        FamiliaDatos: "FamiliaDatos",
        MODEL_Navi_opt: "MODEL_Navi_opt"
      }),
      pages() {
        var size = this.size, page = this.page;
         var cards =  this.FamiliaDatos.map((x, i) => i % size == 0 && this.FamiliaDatos.slice(i, i + size)).filter(x => x)
         return cards[page-1];
      },
     
    },
    created(){
        this.$store.dispatch('actualizarFamilias','PAIRING');
    }
  }
</script>
<style scope>
  @import "../assets/css/global.css";

</style>