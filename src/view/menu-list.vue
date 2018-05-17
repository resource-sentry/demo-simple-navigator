<template>
    <div class="menu-list">
        <menu-list-item
                v-for="item in items"
                v-bind:key="item.id"
                v-bind:icon="item.asset"
                v-bind:label="item.label"></menu-list-item>
    </div>
</template>

<script>
    import MenuListItem from './menu-list-item.vue';

    export default {
        name      : 'menu-list',
        components: {MenuListItem},
        data      : view => {
            return {
                items: view.$store.state.menuItems
            };
        }
    }
</script>
