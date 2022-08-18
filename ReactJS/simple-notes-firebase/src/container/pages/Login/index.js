import React, {Component} from 'react';
import './index.scss'
import {connect} from 'react-redux';
import { getAuth } from "firebase/auth";
import Button from '../../../component/atom/Button';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component{
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

    handleLoginSubmit= async () => {
        const auth = getAuth();
        const {email, password} = this.state;
        const res = await this.props.loginAPI({auth, email, password}).catch(err => err);
        if(res){
            console.log('Login Sukses', res)
            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
                email: '',
                password: ''
            }) 
            window.history.pushState(res, res, '/')
            window.history.go(0) 
           
        } else{
            console.log('Login Gagal')
        }
        
        
    }
    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                    <Button klik={this.handleLoginSubmit} judul="login" loading={this.props.isLoading} />
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
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);