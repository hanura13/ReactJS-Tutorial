import React, {Component} from 'react';
import './Register.scss';

class Register extends Component{
    render(){
        return(
            <div>
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" placeholder="Email" type="text"/>
                    <input className="input" placeholder="Password" type="passwod"/>
                    <button className="btn">Sign Up</button>
                </div>
                {/* <button>Dashboard</button> */}
            </div>
        )  
    }
}

export default Register;