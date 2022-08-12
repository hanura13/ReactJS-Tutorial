import React, {Component} from 'react';
import './Register.scss';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class Register extends Component{
    state={
        email: '',
        password: ''
    }

    handleChangeText= (e) => {
        //console.log(e.target.id)
        this.setState({ 
            [e.target.id]: e.target.value,
        })

    }

    handleRegisterSubmit= () => {
        const {email, password} = this.state;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(userCredential);
            // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
        });
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}/>
                    <button className="btn" onClick={this.handleRegisterSubmit}>Sign Up</button>
                </div>
                {/* <button>Dashboard</button> */}
            </div>
        )  
    }
}

export default Register;