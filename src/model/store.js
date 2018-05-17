import Vuex from 'vuex';

import Mutations from '../controller/mutations';
import * as Rs from './rs';

export function createInitialState() {
    return {
        currentItemId: null,
        menuItems    : createMenuItems([
            {
                asset: Rs.Graphic.CAPTAIN_AMERICA_ADAMANTIUM_SHIELD,
                label: 'Captain America'
            },
            {
                asset: Rs.Graphic.DEADPOOL,
                label: 'Deadpool'
            },
            {
                asset: Rs.Graphic.GHOST_RIDER,
                label: 'Ghost Rider'
            },
            {
                asset: Rs.Graphic.IRON_MAN,
                label: 'Iron Man'
            },
            {
                asset: Rs.Graphic.LOKI,
                label: 'Loki'
            },
            {
                asset: Rs.Graphic.PUNISHER,
                label: 'Punisher'
            },
            {
                asset: Rs.Graphic.SPIDERMAN,
                label: 'Spider-Man'
            },
            {
                asset: Rs.Graphic.THOR_MJOLNIR,
                label: 'Thor'
            }
        ])
    };
}

function createMenuItems(items) {
    return items.map((item, index) => {
        return {...item, ...{id: index + 1}};
    })
}

export function createStore(initialState) {
    return new Vuex.Store({
        state    : initialState,
        mutations: Mutations
    });
}
