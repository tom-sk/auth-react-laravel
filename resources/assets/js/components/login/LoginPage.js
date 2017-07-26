import React, { Component } from 'react';
import LoginForm from './LoginForm';


export default class LoginPage extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
                        <LoginForm />
                    </div>
                </div>
            </div>
        );
    }
}

