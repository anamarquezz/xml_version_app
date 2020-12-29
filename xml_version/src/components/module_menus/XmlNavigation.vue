<template>
  <div v-resize="onResize">
    <nav>
      <v-app-bar color="#4A51A6" dense dark>

        <v-app-bar-nav-icon v-if="isMobile"></v-app-bar-nav-icon>

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
    </nav>
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
  @import "../../assets/css/navigations.css";

  .NoPressed {
    color: white;
  }

  .pressed {
    color: #63DF0F !important;
  }
</style>