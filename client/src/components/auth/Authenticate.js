import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/authActions';

const Authenticate = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Sign In</h2>
            <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="email"
                value={email}
                onChange={onChange} />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password"
                value={password}
                onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { login })(Authenticate);
