import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../actions/authActions';

const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        register({ name, email, password });
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Register</h2>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="name"
                onChange={onChange}
                value={name} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="email"
                onChange={onChange}
                value={email} />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password"
                onChange={onChange}
                value={password} />
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

export default connect(mapStateToProps, { register })(Register);