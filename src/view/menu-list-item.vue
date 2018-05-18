<template>
    <div class="menu-list-item"
         v-bind:class="{'menu-list-item--selected': selected}"
         v-on:click="select">
        <div class="menu-list-item__icon" v-html="iconAsset"></div>
        <div class="menu-list-item__label">{{label}}</div>
    </div>
</template>

<script>
    import * as MutationTypes from '../model/mutation-types';
    import * as Rs from '../model/rs';

    export default {
        name: "menu-item",

        props: {
            icon : {
                type    : Number,
                required: true
            },
            id   : {
                type    : Number,
                required: true
            },
            label: {
                type    : String,
                required: true,
                default : 'Undefined Label'
            }
        },

        computed: {
            iconAsset: view => {
                return Rs.getResource(view.icon);
            },
            selected : view => {
                return view.id === view.$store.state.currentItemId
            }
        },

        methods: {
            select: function () {
                this.$store.commit(MutationTypes.CHANGE_SECTION, {
                    payload: this.id
                });
            }
        }
    }
</script>
