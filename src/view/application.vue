<template>
    <div class="application">
        <div class="container app-content">
            <div class="dashboard">
                <div class="dashboard__left-panel">
                    <menu-list/>
                </div>
                <hero-info/>
            </div>
            <copyright-icons></copyright-icons>
        </div>
    </div>
</template>

<script>
    import CopyrightIcons from './copyright-icons.vue';
    import HeroInfo from './hero-info.vue';
    import MenuList from './menu-list.vue';

    export default {
        name      : 'application',
        components: {CopyrightIcons, HeroInfo, MenuList},
        data      : () => ({})
    }
</script>
