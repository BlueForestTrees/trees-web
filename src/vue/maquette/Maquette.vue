<template>
    <span>
        <v-card-actions>
            <v-spacer></v-spacer>
            <slot name="corner"></slot>
        </v-card-actions>
        <v-window v-model="window" vertical>
            <v-window-item v-for="slide in slides" :key="slide">
                <img :src="url(slide)" style="width:100%"/>
            </v-window-item>
        </v-window>
        <v-divider v-if="!noDiv"/>
        <v-card-actions class="justify-space-between">
            <v-btn v-if="manySlides" flat @click="prev"><v-icon>keyboard_arrow_left</v-icon></v-btn>
            <span v-else></span>
            <span class="display-1 font-weight-thin">{{maquette}}</span>
            <v-btn v-if="manySlides" flat @click="next"><v-icon>keyboard_arrow_right</v-icon></v-btn>
            <span v-else></span>
        </v-card-actions>
        <v-card-actions class="justify-center">
            <v-icon color="blue">live_help</v-icon>
            <span>{{text}}</span>
        </v-card-actions>
    </span>
</template>
<script>
    import {mapState} from "vuex"

    export default {
        name: "maquette",
        props: {
            maquette: {type: String},
            noDiv: {type: Boolean}
        },
        data: () => ({
            window: null
        }),
        computed: {
            ...mapState({maquettes: 'maquettes'}),
            slides() {
                return this.maquettes[this.maquette].slides
            },
            manySlides() {
                return this.slides && this.slides.length > 1
            },
            text() {
                return this.maquettes[this.maquette].text
            },
        },
        methods: {
            url: (slide) => `/img/maquette/${slide}.png`,
            reset() {
                this.window = 0
            },
            next() {
                this.window = this.window + 1 === length ? 0 : this.window + 1
            },
            prev() {
                this.window = this.window - 1 < 0 ? this.length - 1 : this.window - 1
            },
        },
        watch: {
            maquette() {
                this.reset()
            }
        }
    }
</script>