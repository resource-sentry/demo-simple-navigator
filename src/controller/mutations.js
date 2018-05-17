import * as MutationTypes from '../model/mutation-types';

export default {
    [MutationTypes.CHANGE_SECTION]: (state, data) => {
        state.currentItemId = data.payload;
    }
};
