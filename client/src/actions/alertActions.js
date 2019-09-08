import { ADD_ALERT, REMOVE_ALERT } from '../actions/types';
import uuid from 'uuid';

export const addAlert = (alert) => dispatch =>  {
    const id = uuid.v4();

    dispatch({
        type: ADD_ALERT,
        payload: { msg: alert.msg, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000);
}
