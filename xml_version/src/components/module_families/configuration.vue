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
                    <div class="box-model1">PAIRING</div>
                    <div class="box-model2">POT RESET</div>
                </div>
                <div class="box-config-methods">
                    <div class="box-config-top"></div>
                    <div class="box-config-left"></div>
                    <div class="box-config-right"></div>
                    <div class="box-config-bottom"></div>
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