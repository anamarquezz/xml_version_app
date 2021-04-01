<template>
  <div v-resize="onResize">
    <v-app-bar color="#F0F0F0" dense dark>

      <v-app-bar-nav-icon v-if="isMobile"></v-app-bar-nav-icon>

      <div class="alignitemsss">
        <v-btn min-height="47" text @click.prevent="MODEL_Navi_opt = 'PAIRING'"  :class="MODEL_Navi_opt == 'PAIRING' ?  'pressed': 'NoPressed'">
          PAIRING
        </v-btn>

        <v-btn min-height="47" text @click.prevent="MODEL_Navi_opt = 'ROUTERS'" :class="MODEL_Navi_opt == 'ROUTERS' ?  'pressed': 'NoPressed'">
          ROUTERS
        </v-btn>

          <v-btn min-height="47" text @click.prevent="MODEL_Navi_opt = 'CABLE'" :class="MODEL_Navi_opt == 'CABLE' ?  'pressed': 'NoPressed'">
          CABLE
        </v-btn>       

        <v-btn min-height="47" text @click.prevent="MODEL_Navi_opt = 'CABLEMODEMS'" :class="MODEL_Navi_opt == 'CABLEMODEMS' ?  'pressed': 'NoPressed'">
          CABLE MODEMS
        </v-btn> 

     
      </div>

      
    </v-app-bar>

  </div>


</template>

<script>
  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";
  export default {
    name: 'menu-navigation',
    components: {},
    data() {
      return {
        isMobile: false,
        drawer: false,
        group: null

      };
    },
    computed: {
      ...mapGetters([""]),
      MODEL_Navi_opt: {
        get() {
          return this.$store.state.MODEL_Navi_opt;
        },
        set(newValue) {
         this.$store.commit("set_value", {name:'MODEL_Navi_opt',value:newValue});
         this.$store.dispatch('actualizarFamilias',newValue);
         //this.$router.push(newValue);
        }
      },
    },
    methods: {
      onResize() {
        if (window.innerWidth < 600) this.isMobile = true;
        else this.isMobile = false;
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/menuNavigation.css";

 

</style>