﻿<template>
    <span>

    <v-select :label="label || 'Grandeur...'" item-text="label" required
              :items="getGrandeurs()" :value="value" @change="v => $emit('input',v)"
              :disabled="disabled"
              :rules="[required]"
              return-object
    />
    </span>
</template>

<script>
    import {getGrandeurs} from "unit-manip"
    import {required} from "../../services/rules"

    export default {
        name: 'grandeur-select',
        props: ['value', 'disabled', 'label'],
        methods: {
            getGrandeurs, required
        }
    }
</script>