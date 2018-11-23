import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render(){
        return (
            <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Mypage">Mypage</Link></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
            </ul>
            <hr/>
        </div>
        );
    }
}

export default Menu;