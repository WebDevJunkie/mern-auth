import { ADD_ALERT, REMOVE_ALERT } from '../actions/types';

export default function(state = [], action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_ALERT:
            return [ payload, ...state ];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}
