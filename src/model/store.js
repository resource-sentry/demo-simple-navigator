import Vuex from 'vuex';

import Mutations from '../controller/mutations';
import * as Rs from './rs';

export function createInitialState() {
    return {
        currentItemId: null,
        menuItems    : createMenuItems([
            {
                asset: Rs.Graphic.CAPTAIN_AMERICA_ADAMANTIUM_SHIELD,
                label: 'Captain America',
                bio  : Rs.Text.MEH_CAPTAIN_BIO
            },
            {
                asset: Rs.Graphic.DEADPOOL,
                label: 'Deadpool',
                bio  : Rs.Text.COOL_DEADPOOL_BIO
            },
            {
                asset: Rs.Graphic.GHOST_RIDER,
                label: 'Ghost Rider',
                bio  : Rs.Text.COOL_GHOST_RIDER_BIO
            },
            {
                asset: Rs.Graphic.IRON_MAN,
                label: 'Iron Man',
                bio  : Rs.Text.COOL_IRON_MAN_BIO
            },
            {
                asset: Rs.Graphic.LOKI,
                label: 'Loki',
                bio  : Rs.Text.MEH_LOKI_BIO
            },
            {
                asset: Rs.Graphic.PUNISHER,
                label: 'Punisher',
                bio  : Rs.Text.MEH_PUNISHER_BIO
            },
            {
                asset: Rs.Graphic.SPIDERMAN,
                label: 'Spider-Man',
                bio  : Rs.Text.MEH_SPIDER_MAN_BIO
            },
            {
                asset: Rs.Graphic.THOR_MJOLNIR,
                label: 'Thor',
                bio  : Rs.Text.COOL_THOR_BIO
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
