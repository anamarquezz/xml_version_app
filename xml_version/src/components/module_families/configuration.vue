<template>
    <div v-resize="onResize">
        <div class="web">
            <div class="content">
                <div class="header-title">
                    <div class="box-title">
                        <div class="subtitles">
                            <h4>PAIRING</h4>
                            <h6 class="deep-purple--text text--lighten-1">RBK12v1</h6>
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
                    <v-btn-toggle v-model="toggle_exclusiveRouter" color="var(--primary)">
                        <v-btn class=" ml-1" medium>
                            RBR10v1
                        </v-btn>
                        <v-btn class=" ml-1" medium>
                            RBS10v1
                        </v-btn>
                    </v-btn-toggle>
                    <div>
                       <h2> RBR850v1</h2>
                    </div>
                </div>
                <div class="box-config-methods">
                    <div class="box-config-top">
                        <div class="box-c font-weight-bold"> </div>
                        <div class="box-c">
                            
                        </div>
                        <div class="box-c font-weight-bold"> Imagen:</div>
                        <div class="box-c">
                            <v-file-input background-color="#fff" color="#232e8a" label="File input"
                                placeholder="Select the Image" prepend-icon="mdi-paperclip"></v-file-input>
                        </div>
                    </div>
                    <div class="box-config-left">
                        <v-btn-toggle v-model="toggle_exclusiveMethod" class="option-test d-block"
                            color="var(--primary)">

                            <v-tooltip top v-for="method in methods" v-bind:key="method.id">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="b-models white--text" depressed large color="--var( --primary)"
                                        :disabled="!method.parameters.length>0" @click="MethodSelected(method)">
                                        {{method.description}}
                                    </v-btn>
                                </template>
                                <span> {{method.title}}</span>
                            </v-tooltip>
                        </v-btn-toggle>
                    </div>
                    <div class="box-config-right">
                        <div class="text-center mb-6">
                            <h3> {{SMethodValues.title}}  </h3>
                        </div>
                        <div v-for="params in SMethodValues.parameters" v-bind:key="params.name"
                            class="formularcontainer">

                            <div class="text-right">
                                <h4 class="font-weight-black dblock">{{params.name}} : </h4>
                            </div>
                            <div class="boxx">
                                <v-combobox v-if="params.component == 'combobox'" background-color="#fff" outlined
                                    :items="getitems(params.name)" v-model="params.value"  :label="params.name" dense class="shrink size-combo">
                                </v-combobox>

                                <v-text-field v-if="params.component == 'textfield'" dense :type="params.type"
                                     :label="params.name" outlined background-color="#fff"
                                    v-model="params.value"></v-text-field>

                                <v-radio-group v-if="params.component == 'radio'" v-model="params.value" row>
                                    <v-radio label="True" :value="1"></v-radio>
                                    <v-radio label="False" :value="0"></v-radio>
                                </v-radio-group>


                                <div v-if="params.List" class="formularcontainervalues">

                                    <div v-for="values in params.values" v-bind:key="values.name" class="box"
                                        :style="{order:values.order}">


                                        <!-- combobox -->
                                        <v-combobox v-if="values.component == 'combobox'" :label="values.name"
                                            background-color="#fff" outlined items="" v-model="selectCombo" dense
                                            class="shrink size-combo"></v-combobox>

                                        <!-- Textfield -->
                                        <v-text-field v-if="values.component == 'textfield'" dense :label="values.name"
                                            :type="values.type" outlined background-color="#fff" v-model="values.value">
                                        </v-text-field>

                                        <v-radio-group v-if="values.component == 'radio'" v-model="values.value" v-on:input="values.value = $event.target.value" row>
                                            <v-radio label="True" :value="1"></v-radio>
                                            <v-radio label="False" :value="0"></v-radio>
                                        </v-radio-group>

                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                    <div class="box-config-bottom">
                        <v-btn class="b-models white--text" depressed large color="--car(--secondaryDark)">
                            Save
                        </v-btn>
                    </div>
                </div>
                <div class="box-generate">
                    <v-btn class="b-models white--text" depressed large color="--car(--secondaryDark)">
                        Generate XML
                    </v-btn>
                    <v-btn class="b-models white--text" depressed large color="--car(--secondaryDark)">
                        COPY
                    </v-btn>
                </div>
                <div class="box-xml">
                    <textarea id="idTxtArea" v-model="xmlexample">

                     </textarea>


                </div>
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
                toggle_exclusiveMethod: 0,
                SMethodValues: '',
                column: null,
                row: null,
            };
        },
        computed: {
            ...mapState({
                AccessType: 'AccessType',
                methods: 'methods',
                xml_selected:'xml_selected'
            }),
            ...mapGetters([""]),
            xmlexample: {
                get() {
                    return this.$store.state.xmlexample;
                    /*var xmldata = String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                    document.getElementById('idTxtArea').value=xmldata.xml(xml, 4);*/
                },
                set(newvalue) {

                }
            }
        },
        methods: {
            onResize() {
                if (window.innerWidth < 600) this.isMobile = true;
                else this.isMobile = false;
            },
            MethodSelected(selectedvalue) {
                var me = this;
                me.SMethodValues = selectedvalue;
            },
            generateXML() {
                return xmlexample;
            },
            getitems(name) {
                var me = this ;
                var items = ''
                switch(name){
                    case 'access_type': 
                        items = me.AccessType;
                    break;
                }
                return items;
            }
        }
    }
</script>
<style scoped>
    @import "../../assets/css/configuration.css";
</style>