<template>
    <div class="hero-info">
        {{content}}
    </div>
</template>

<script>
    import * as Rs from '../model/rs';

    export default {
        name    : 'hero-info',
        computed: {
            content: view => {
                let content = 'Select your super hero.';
                let currentId = view.$store.state.currentItemId;
                let selectedHero = view.$store.state.menuItems.filter(hero => {
                    return hero.id === currentId;
                });
                let [hero] = selectedHero;

                if (hero !== undefined) {
                    content = Rs.getResource(hero.bio);
                }

                return content;
            }
        }
    }
</script>
