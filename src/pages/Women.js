import React, {Component} from 'react';
import women from './women.css'
import Apollogr from '../Image/Apollogr.jpg'
import Apollowh from '../Image/Apollowh.jpg'
import belt from '../Image/belt.jpg'
class Women extends Component {
    render() {
        return (
            <div>
                <p className="category">Women</p>
                <img className="first" src={Apollogr}/>
                <p className="cost1">$50</p>
                <img className="second" src={Apollowh}/>
                <p className="cost2">$50</p>
                <img className="third" src={belt}/>
                <p className="cost3">$50</p>

                <img className="forth" src={Apollogr}/>
                <p className="cost4">$50</p>
                <img className="fifth" src={Apollowh}/>
                <p className="cost5">$50</p>
                <img className="sixth" src={belt}/>
                <p className="cost6">$50</p>
            </div>
        );
    }
}

export default Women;

