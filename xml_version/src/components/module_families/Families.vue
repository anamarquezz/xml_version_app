<template>
  <div v-resize="onResize">

    <div class="icons-search">
      <div class="txt-title">
        <h4>{{FamiliaDatos.title}}</h4>
      </div>
      <div class="text-center">
        <v-pagination :length="pageLength" v-model="page"></v-pagination>
      </div>
    </div>

    <div class="cards-routers">
      <div class="cards" :class="FamiliaDatos.background" v-for="model in pages" v-bind:key="model.id"
        @click="clickmodel(model)">
        <div class="imgen-r">
          <img class="img-size" src="https://www.netgear.es/images/support/networking/Orbi/RBK12-Hero-Transparent.png"
            alt="">
        </div>
        <div class="footer-card">
          <h4>{{model.model}}</h4>
        </div>
      </div>

    </div>

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
        page: 1,
        size: 6,
        pageLength: 3

      };
    },
    computed: {
      ...mapState({
        FamiliaDatos: "FamiliaDatos",
        option_xmlconfiguration:""       
      }),
      ...mapGetters([""]),
      pages() {
        var size = this.size,
          page = this.page;
        var cards = this.FamiliaDatos.models.map((x, i) => i % size == 0 && this.FamiliaDatos.models.slice(i, i + size))
          .filter(x => x)
        return cards[page - 1];
      }
    },
    methods: {
      onResize() {
        if (window.innerWidth < 600) this.isMobile = true;
        else this.isMobile = false;
      },
      clickmodel(model) {
        this.$store.dispatch('actualizar_optionXML', {option:'families',modelChilds:models, nameModel: models.model});
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/pairing.css";

  .NoPressed {
    color: black;
  }

  .pressed {
    color: black !important;
    border-bottom: 5px solid #707AFF;
    background-color: #D7DAFF;
  }

  .alignitemsss {
    display: flex;
    flex-direction: center;
  }
</style>