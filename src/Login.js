import React, { Component } from 'react';
import './login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {authenticate : false};
        this.login = this.login.bind(this);
    }
    login() {
        let userName = this.refs.userName.value;
        let password = this.refs.password.value;
        let url = 'http://localhost:4373/api/token';
        fetch(url + '?userName=' + userName + '&password=' + password)
            .then(response => response.json())
            .then(data => {
                this.setState({authenticate : true});
                window.localStorage.setItem('token', data);
                //this.props.history.push("/products");
            });
    }
    render() {
        if(this.state.authenticate)
        {
            return <Redirect to='/products' />
        }
        return (
            <div className="container">
                <h1 className="form-heading">login Form</h1>
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Admin Login</h2>
                            <p>Please enter your email and password</p>
                        </div>
                        <div id="Login">

                            <div className="form-group">


                                <input className="form-control" ref="userName" placeholder="User Name" />

                            </div>

                            <div className="form-group">

                                <input type="password" className="form-control" ref="password" placeholder="Password" />

                            </div>
                            <div className="forgot">
                                <a href="reset.html">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary" onClick={this.login}>Login</button>

                        </div>
                    </div>
                    <p className="botto-text"> Designed by Sunil Rajput</p>
                </div>
            </div>


        );
    }
}

export default Login;