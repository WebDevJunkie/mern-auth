import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOAD_USER, LOGOUT } from '../actions/types';

export default function(state = {}, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_USER:
            return {
                ...state,
                user: payload,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return { 
                ...state, 
                errors: payload,
                isAuthenticated: false
            };
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
            }
        default:
            return {};
    }
}
