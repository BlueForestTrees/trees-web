<template>
    <v-container pa-0>
        <v-container>
            <v-window v-model="window">
                <v-window-item key="c" lazy>
                    <plan-constat/>
                </v-window-item>
                <v-window-item key="b" lazy>
                    <plan-besoin/>
                </v-window-item>
                <v-window-item key="f" lazy>
                    <plan-func/>
                </v-window-item>
                <v-window-item key="t" lazy>
                    <plan-tech/>
                </v-window-item>
            </v-window>
        </v-container>

        <v-divider/>
        <v-item-group v-model="window" mandatory>
                <v-layout row style="max-width: 20em" mx-auto>
                    <v-item key="bb">
                        <v-flex slot-scope="{ active, toggle }">
                            <span class="label-command">
                                <span :class="active?'bold-font':''" @click="toggle">Aujourd'hui</span>
                                <v-btn :input-value="active" icon class="ml-0" @click="toggle"><v-icon color="primary">fiber_manual_record</v-icon></v-btn>
                            </span>
                        </v-flex>
                    </v-item>
                    <v-item key="bc">
                        <v-flex slot-scope="{ active, toggle }">
                            <span class="label-command">
                                <span :class="active?'bold-font':''" @click="toggle">Besoin</span>
                                <v-btn :input-value="active" icon class="ml-0" @click="toggle"><v-icon color="primary">fiber_manual_record</v-icon></v-btn>
                            </span>
                        </v-flex>
                    </v-item>
                    <v-item key="bf">
                        <v-flex slot-scope="{ active, toggle }">
                            <span class="label-command">
                                <span :class="active?'bold-font':''" @click="toggle">Offre</span>
                                <v-btn :input-value="active" icon class="ml-0" @click="toggle"><v-icon color="primary">fiber_manual_record</v-icon></v-btn>
                            </span>
                        </v-flex>
                    </v-item>
                    <v-item key="bt">
                        <v-flex slot-scope="{ active, toggle }">
                            <span class="label-command">
                                <span :class="active?'bold-font':''" @click="toggle">Technique</span>
                                <v-btn :input-value="active" icon class="ml-0" @click="toggle"><v-icon color="primary">fiber_manual_record</v-icon></v-btn>
                            </span>
                        </v-flex>
                    </v-item>
                </v-layout>
            </v-item-group>

        <connect-to-continue-dialog can-stay/>
    </v-container>
</template>

<script>
    import Messages from "../messages/Messages"
    import {GO} from "../../const/go"
    import Card from "../common/Card"
    import ConnectToContinueDialog from "../dialog/ConnectToContinueDialog"

    const PlanConstat = () => import(/* webpackChunkName: "PlanConstat"*/ "./Plan1Constat")
    const PlanBesoin = () => import(/* webpackChunkName: "PlanBesoin"*/ "./Plan2Besoin")
    const PlanFunc = () => import(/* webpackChunkName: "PlanFunc"*/ "./Plan3Fonc")
    const PlanTech = () => import(/* webpackChunkName: "PlanTech"*/ "./Plan4Tech")

    export default {
        name: "plan",
        components: {PlanTech, PlanFunc, PlanBesoin, PlanConstat, ConnectToContinueDialog, Card, Messages},
        data: () => ({GO, window: null})
    }
</script>

<style>

    p {
        margin-left: 1.3em
    }

</style>