<template>
    <div class="menu-list-item">
        <div class="menu-list-item__icon" v-html="iconAsset"></div>
        <div class="menu-list-item__label">{{label}}</div>
    </div>
</template>

<script>
    import * as Rs from '../model/rs';

    export default {
        name: "menu-item",

        props: {
            icon : {
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
            }
        }
    }
</script>
