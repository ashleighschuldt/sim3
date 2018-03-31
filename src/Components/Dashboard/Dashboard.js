import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Dashboard.css'


class Dashboard extends Component {
    render(){
        return (
        <div>
            <Nav />
        <div className='dashboard-container'>    
            Dashboard
        </div>
        </div>
        )}
}
export default Dashboard;