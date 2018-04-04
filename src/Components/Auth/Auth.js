import React, { Component } from 'react';
import heloLogo  from '../../images/helo_logo.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../../ducks/actions/action';
import axios from 'axios';
import '../../App.css';
import './Auth.css'

class Auth extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e){
        const userInfo = ({
            [e.target.name]: e.target.value,
        })
        this.props.updateUser(userInfo)
    }

    createUserOrLogin(e, login){
        e.preventDefault();
        axios.post(`/api/auth/${login}`, {username:this.props.user.username, password:this.props.user.password})
            .then((response)=>{
                if(response.data.success){
                    this.props.history.push('/Dashboard');
                }else{
                    alert("your email or password is incorrect")
                }
            })
            .catch((err)=>{
                console.log(err)
            }) 
    }

    render(){
        return (
        <div className='auth-body'>
            <div className='heloLogo'>
            <img alt='heloLogo' src={heloLogo}/>
            </div>
            <p><b>Helo</b></p>
            <div className='auth-input'>
            <label>Username:</label>
            <input name='username' onChange={ this.handleChange }/>
            <br></br>
            <label>Password:</label>
            <input type='password' name='password' onChange={ this.handleChange } />
            </div>
            <div className='auth-button-div'>
            <button className='login' onClick={(event)=>{this.createUserOrLogin(event, 'login')}}>Login</button>
            <button className='login' onClick={(event)=>{this.createUserOrLogin(event, 'register')}}>Register</button>
            </div>
        </div>
        )}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ updateUser }, dispatch);
}

export default connect (state => state, mapDispatchToProps)(Auth);