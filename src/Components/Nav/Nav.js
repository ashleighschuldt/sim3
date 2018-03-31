import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import homeLogo from '../../images/home_logo.png'
import newLogo from '../../images/new_logo.png'
import shutDown from '../../images/shut_down.png'
import './Nav.css'

export default function Nav(){
        return (
            <div className='Nav-container'>
               <Link to={`/dashboard`}> <img src={homeLogo}/></Link>
                <Link to={`/new`}><img src={newLogo}/></Link>
                <Link to={`/`}><img src={shutDown}/></Link>
            </div>
        )
    }
