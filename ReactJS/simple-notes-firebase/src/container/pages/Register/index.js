import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Register.scss';
import { getAuth } from "firebase/auth";
import Button from '../../../component/atom/Button';
import { registerUserAPI } from '../../../config/redux/action';

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

    handleRegisterSubmit= async () => {
        const auth = getAuth();
        const {email, password} = this.state;
        const res = await this.props.registerAPI({auth, email, password});
        if(res){
            this.setState({
                email: '',
                password: ''
            })  
        }
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                    <Button klik={this.handleRegisterSubmit} judul="Register" loading={this.props.isLoading} />
                </div>
                {/* <button>Dashboard</button> */}
            </div>
        )  
    }
}

const reduxState = (state)=> ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch )(Register);