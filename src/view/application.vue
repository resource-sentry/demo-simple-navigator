<template>
    <div class="application">
        <div class="container app-content">
            <menu-list></menu-list>
            <copyright-icons></copyright-icons>
        </div>
    </div>
</template>

<script>
    import CopyrightIcons from './copyright-icons.vue';
    import MenuList from './menu-list.vue';

    export default {
        name      : 'application',
        components: {CopyrightIcons, MenuList},
        data      : () => ({})
    }
</script>
