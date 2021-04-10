<template>
  <div>
    <v-card class="mx-auto" height="100%">
      <v-list>   
         <v-list-item>
        <v-list-item-content>
            <img src="@/assets/img/logonetgear.png" width="200">
        </v-list-item-content>
      </v-list-item>
      <v-subheader>MODELS</v-subheader>
        <div style="display:none">{{Models}}</div>
        <v-list-item>
          <v-text-field class="grey lighten-2 text-uppercase" v-model="search" append-icon="mdi-magnify" label="Search"
            single-line hide-details @keyup="uppercase">
          </v-text-field>
        </v-list-item>


        <v-list-group class="model-transform"   v-for="model in modeloss" :value="false" prepend-icon="mdi-router-wireless" v-bind:key="model.id">
          <template v-slot:activator>
            <v-list-item-title v-text="model.model"></v-list-item-title>
          </template>


          <v-list-group  v-for="childmodel in model.childs"  no-action  sub-group v-bind:key="childmodel.id" prepend-icon="mdi-router-wireless">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="childmodel.model" @click="selectetModel(childmodel,model.id )"></v-list-item-title>
              </v-list-item-content>              
            </template>

            <!--v-list-item v-for="xmlfiles in childmodel.suitesxml" link v-bind:key="xmlfiles.id">
              <v-list-item-title v-text="xmlfiles.name"></v-list-item-title>

              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
            </v-list-item--> 

          </v-list-group>

        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>
  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";

  export default {
    name: 'XmlNavigation',
    components: {},
    computed: {
      ...mapState({
         FamiliaDatos: "FamiliaDatos",
      }),
      Models:{
        get(){
          this.modeloss = this.FamiliaDatos.models;
          return this.FamiliaDatos.models;
        },
         set(newValue) {

         }
      }  
    },
    data() {
      return {
        search: '',
        modeloss:'' 
      }
    },
    methods: {
      uppercase() {
        this.search = this.search.toUpperCase();
        this.findModel();
      },
      findModel() {
        var searcherouter = this.search;
        this.modeloss = this.FamiliaDatos.models.filter(evalu =>
          evalu.model.toLowerCase().includes(searcherouter.toLowerCase())
        );
      },
      selectetModel(model){
        var me = this;
        this.$store.dispatch('updateConfiguration', {name:'xml_selected',value:model});
      }
    }, 
    mounted() {
       this.modeloss = this.FamiliaDatos.models;
    }
  }
</script>
<style scoped>
.v-list .v-list-item--active{
  color:var(--primary) !important;
}

.v-list-item__content {
  flex: none;
}

</style>