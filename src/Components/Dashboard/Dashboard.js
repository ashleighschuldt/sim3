import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Dashboard.css';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`/api/posts`)
            .then( response => {
                this.setState({
                    posts: response.data
                })
            })
    }


    render(){
const posts = this.state.posts.map((e,i) => {
    return (
    <div key={i} className='post-container'>
        <div className='post-title'>{ this.state.posts[i].title }</div>
        <div>
        <img alt='profile-pic' src={this.state.posts[i].profile_pic} />
        { this.state.posts[i].username }
        
        </div>
    </div>)
})
        return (
        <div>
            <Nav />
        <div className='dashboard-container'>
            <div>    
            <input />
            <button>Reset</button>
            <p>My Posts</p>
            <input type="checkbox"/>
            </div>
        
        <div className='post'>
        {posts}
        </div>
        </div>
        </div>
        )}
}
export default Dashboard;