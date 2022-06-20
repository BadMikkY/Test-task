import React, {Component} from 'react';
import './header.css';
import logo from '../Image/logo.jpg'
import arrow from '../Image/arrow.jpg'
import cart from '../Image/cart.png'
import line from '../Image/line.jpg'
import {Women} from '../pages/Women';



class Header extends Component {
    render() {
        return (
            <div>
                <a href="/"><p className="Women-bar">WOMEN</p></a>
                <a href="/Men"><p className="Men-bar">MEN</p></a>
                <a href="/Kids"><p className="Kids-bar">KIDS</p></a>
                <img className="logo" src={logo}/>
                <p className="val">$</p>
                <img className="arr" src={arrow}/>
                <img className="cart" src={cart}/>
                <img className="line" src={line}/>
            </div>
        );
    }
}

export default Header;