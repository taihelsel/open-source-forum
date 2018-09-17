import React, { Component } from 'react';
import "./LoginStyle.css";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            min_pass: 8, //sets minimum length for password (reduces num of bad submits)
            min_user: 5, //sets minimum length for username
            err_msg: ""
        }
    }
    updateText = (e) => {
        const input = e.currentTarget.value;
        const name = e.currentTarget.getAttribute("name");
        this.setState({
            [name]: input
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        if (this.state.username.length >= this.state.min_user && this.state.password.length >= this.state.min_pass) {
            fetch("/auth/login", {
                method: "POST",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    this.setState({
                        err_msg: "Error : Invalid login credentials",
                    });
                }
            })
                .then((res) => {
                    this.setState({
                        err_msg: "",
                    });
                });
        } else {
            this.setState({
                err_msg: "Error : Invalid login credentials"
            });
        }
    }
    renderErrMsg = () => {
        return (this.state.err_msg ? (
            <div className="error-message">
                {this.state.err_msg}
            </div>
        ) : (""));
    }
    render() {
        return (
            <section id="login">
                {this.renderErrMsg()}
                <form id="pannel-login-form" onSubmit={this.handleSubmit}>
                    <h1 className="form-header">Pannel Login</h1>
                    <div className="form-control">
                        <h1>Username</h1>
                        <input type="text" name="username" onChange={this.updateText} value={this.state.username} />
                    </div>
                    <div className="form-control">
                        <h1>Password</h1>
                        <input type="password" name="password" onChange={this.updateText} value={this.state.password} />
                    </div>
                    <input id="login-btn" type="submit" value="Login" />
                </form>
            </section>
        );
    }
}

export default Login;
