import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER, LOGOUT } from './types';
import { addAlert } from '../actions/alertActions';

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(addAlert(error)));
        }

        dispatch({ type: REGISTER_FAIL });
    }
}

export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(addAlert(error)));
        }

        dispatch({ type: LOGIN_FAIL });
    }
}

export const loadUser = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await axios.get('/api/auth', config);
        dispatch({
            type: LOAD_USER,
            payload: res
        });
    } catch (err) {
        console.error(err);
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}
