<template>
    <div v-resize="onResize">
        <div class="web">
            <div class="content">
                <div class="header-title">
                    <div class="box-title">
                        <div class="subtitles">
                            <h4>PAIRING</h4>
                            <h6 style=")">RBK12v1</h6>
                        </div>
                        <div class="titles">XML CONFIGURATION</div>
                    </div>
                </div>
                <div class="test">
                    <!--div class=" text-center">PAIRING</div>
                    <div class="box-pot text-center">POT RESET</div-->
                    <v-btn-toggle v-model="toggle_exclusiveTest" class="option-test" color="var(--primary)">
                        <v-btn class="btnop">
                            PAIRING
                        </v-btn>
                        <v-btn class="btnop">
                            POT RESET
                        </v-btn>

                    </v-btn-toggle>
                </div>
                <div class="box-models">
                    <v-btn-toggle v-model="toggle_exclusiveRouter" class="option-test" color="var(--primary)">
                        <v-btn class=" ml-1">
                            RBR10v1
                        </v-btn>
                        <v-btn class=" ml-1">
                            RBS10v1
                        </v-btn>

                    </v-btn-toggle>
                </div>
                <div class="box-config-methods">
                    <div class="box-config-top">
                        <div class="box-c font-weight-bold"> Acces Type:</div>
                        <div class="box-c">
                            <v-combobox outlined :items="AccessType" v-model="selectAccesType" dense
                                class="shrink size-combo"></v-combobox>
                        </div>
                        <div class="box-c font-weight-bold"> Imagen:</div>
                        <div class="box-c">
                            <v-file-input color="#232e8a" counter label="File input" multiple
                                placeholder="Select the Image" prepend-icon="mdi-paperclip" outlined></v-file-input>
                        </div>
                    </div>
                    <div class="box-config-left">
                        <v-btn-toggle v-model="toggle_exclusiveMethod" class="option-test d-block"
                            color="var(--primary)">

                            <v-tooltip top v-for="method in methods" v-bind:key="method.id">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn  class="b-models white--text"
                                        depressed large color="--var( --primary)">
                                        {{method.name}}
                                    </v-btn>
                                </template>
                                <span> {{method.description}}</span>
                            </v-tooltip>

                        </v-btn-toggle>
                    </div>
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
            return {
                selectAccesType: '',
                toggle_exclusiveTest: 0,
                toggle_exclusiveRouter: 0,
                toggle_exclusiveMethod:0
            };
        },
        computed: {
            ...mapState({
                AccessType: 'AccessType',
                methods: 'methods'
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