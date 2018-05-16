<template>
    <div class="application">
        <div class="container app-content">
            <copyright></copyright>
        </div>
    </div>
</template>

<script>
    import Copyright from './copyright.vue';

    export default {
        name      : 'application',
        components: {Copyright},
        data() {
            return {}
        }
    }
</script>
