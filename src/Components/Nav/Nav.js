import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import homeLogo from '../../images/home_logo.png'
import newLogo from '../../images/new_logo.png'
import shutDown from '../../images/shut_down.png'
import './Nav.css'

export default function Nav(){
        return (
            <div className='Nav-container'>
               <Link to={`/dashboard`}> <img alt="home"src={homeLogo}/></Link>
                <Link to={`/new`}><img alt="new" src={newLogo}/></Link>
                <Link to={`/`}><img alt="shutdown" src={shutDown}/></Link>
            </div>
        )
    }
