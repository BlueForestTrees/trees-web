<template>
<v-container>

        <!--<v-layout row wrap justify-center align-center xs-4 mb-1>-->
            <!--<v-list-tile-avatar class="voice logo my-3"></v-list-tile-avatar>-->
            <!--<search-text :value="search.name" @input="pickName" class="not-too-half"/>-->
        <!--</v-layout>-->

        <!--<v-layout :column="$vuetify.breakpoint.xsOnly" align-center justify-center>-->
            <!--<owner-picker @input="pickOwner" :value="search.owner"/>-->
        <!--</v-layout>-->

        <v-card>
            <search-list :action="On.SEARCH_INFO" empty-search>
                <template slot-scope="{item, i, length}">
                    <v-list-tile @click="$emit('select',item)" avatar :key="item._id">
                        <info-dense :info="item"/>
                        <v-list-tile-action>
                            <v-list-tile-action-text>{{deltaTime(item.date)}}</v-list-tile-action-text>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="i + 1 < length"></v-divider>
                </template>
            </search-list>
        </v-card>
</v-container>

</template>

<script>
    import On from "../../const/on"
    import {mapState, mapGetters} from "vuex"
    import Info from "../pub/Info"
    import Loader from "../loader/Loader"
    import InfoDense from "./InfoDense"
    import TransitionExpand from "../common/TransitionExpand"
    import SearchText from "../search/SearchText"
    import OwnerPicker from "../search/OwnerPanel"
    import SearchList from "../common/SearchList"
    import {deltaTime} from "../../services/calculations"

    export default {
        name: "my-infos",
        components: {
            SearchList, OwnerPicker, SearchText, TransitionExpand, InfoDense, Loader,Info},
        props: ['user'],
        data: () => ({On}),
        computed: {
            ...mapState({search: s => s.search}),
            ...mapGetters(['filter'])
        },
        methods: {
            deltaTime,
            pickName(name) {
                this.search.name = name
            },
            pickOwner(owner) {
                this.search.owner = owner
            },
        }
    }
</script>