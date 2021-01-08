<template>
    <div v-resize="onResize">
        <div class="web">
            <div class="-header-title">
            </div>
            <div class="content">
                <div class="test">
                    <div class="box-pairing">PAIRING</div>
                    <div class="box-pot">POT RESET</div>
                </div>
                <div class="box-models">
                    <v-btn class="b-models white--text" depressed large color="#4A5CEE">
                        RBR10v1
                    </v-btn>
                    <v-btn class="b-models white--text" depressed large color="#888888">
                        RBS10v1
                    </v-btn>
                </div>
                <div class="box-config-methods">
                    <div class="box-config-top">
                        <div class="box-c"> Acces Type:</div>
                        <div class="box-c"> <v-combobox outlined dense class="shrink size-combo"></v-combobox></div>
                        <div class="box-c"> Imagen:</div>
                        <div class="box-c"> <v-file-input label="File input" outlined dense></v-file-input></div>                       
                       
                    </div>
                    <div class="box-config-left"></div>
                    <div class="box-config-right"></div>
                    <div class="box-config-bottom">
                        <v-btn class="b-models white--text" depressed large color="#4A5CEE">
                            Save
                        </v-btn>
                    </div>
                </div>
                <div class="box-generate"></div>
                <div class="box-xml"></div>
                <div class="box-actions"></div>
            </div>
        </div>
        <div class="mobil">
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
        name: 'configuration',
        components: {},
        data() {
            return {};
        },
        computed: {
            ...mapState({

            }),
            ...mapGetters([""])
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
    @import "../../assets/css/configuration.css";
</style>