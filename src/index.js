import Vue from 'vue';
import Vuex from 'vuex';

import Application from './view/application.vue';
import {createInitialState, createStore} from './model/store';

Vue.config.productionTip = false;
Vue.use(Vuex);

let vm = new Vue({
    el    : '.vue-target',
    render: createElement => createElement(Application),
    // Inject the store instance to all child components
    store : createStore(createInitialState())
});
