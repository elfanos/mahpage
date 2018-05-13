/**
 * Created by Rasmus on 2018-05-11.
 */

import * as type from '../constants/navbar.contants';

const defaultState = {
    type: '',
    button: type.WORK,
};

const reducer = (state = defaultState, action) => {
    //console.log(action);
    switch ( action.type ){
        case type.CLICK_ACTION:
            return {
                ...state,
                type: action.type,
                button: action.button
            };
        default:
            return {
                ...state
            }

    }
};
export default reducer;