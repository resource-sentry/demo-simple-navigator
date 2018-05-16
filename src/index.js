import Vue from 'vue';

import Application from './view/application.vue';

Vue.config.productionTip = false;

let vm = new Vue({
    el    : '.vue-target',
    render: createElement => createElement(Application)
});
