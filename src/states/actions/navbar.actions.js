/**
 * Created by Rasmus on 2018-05-11.
 */
import * as navbar from '../constants/navbar.contants';
export const clickAction = ( button ) => {
    return {
        type: navbar.CLICK_ACTION,
        button: button
    };
};