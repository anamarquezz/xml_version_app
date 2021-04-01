<template>
  <div v-resize="onResize">
   
      <v-app-bar class="" color="#F0F0F0" dense dark>     

        <v-spacer></v-spacer>

        <v-btn text @click.prevent="XML_Navi_opt = 'DASHBOARD'" :class="XML_Navi_opt == 'DASHBOARD' ?  'pressed': 'NoPressed'">
          DASHBOARD
        </v-btn>

        <v-btn text @click.prevent="XML_Navi_opt = 'XMLCONFIGURATION'"
          :class="XML_Navi_opt =='XMLCONFIGURATION'  ? 'pressed': 'NoPressed'">
          XML CONFIGURATION
        </v-btn>

        <v-btn text @click.prevent="XML_Navi_opt = 'STATIONS'" :class="XML_Navi_opt =='STATIONS'  ? 'pressed': 'NoPressed'">
          STATIONS
        </v-btn>

        <v-btn text @click.prevent="XML_Navi_opt = 'XMLVERSIONS'" :class="XML_Navi_opt =='XMLVERSIONS'  ? 'pressed': 'NoPressed'">
          XML VERSIONS
        </v-btn>

      </v-app-bar>
    
  </div>


</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
  export default {
    name: 'XmlNavigation',
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
      XML_Navi_opt: {
        get() {     
          return this.$store.state.XML_Navi_opt;
        },
        set(newValue) {          
          this.$store.commit("set_value", {name:'XML_Navi_opt',value:newValue});
          this.$router.push(newValue);
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


  .NoPressed {
    color: black !important;
  }

  .pressed {
    color: #652D8D  !important;
     border-bottom: 5px solid #652D8D;
    background-color:transparent;
  }


</style>