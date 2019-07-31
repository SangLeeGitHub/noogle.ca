import React, { Component } from 'react';
import './Home.css';
import Crepe from '../img/crepe.png';
import Cookie from '../img/cookie.png';
import Choco from '../img/choco.png';
import Cream from '../img/cream.png';
import Coke from '../img/coke.png';
import Cake from '../img/cake.png';
import Candy from '../img/candy.png';
import Cheeze from '../img/cheeze.png';
import Cinnamon from '../img/cinnamon.png';
import Chili from '../img/chili.png';


class MainSlideComponent extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <ul className="sq clearfix">
                        <li className="sq-item sq-item-large">
                            <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Crepe} />
                                <span className="sq-item-anchor-title">Crepe</span>
                            </a>
                        </li>
                        <li className="sq-item">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Cookie} />
                                <span className="sq-item-anchor-title">Cookie</span>
                            </a>
                        </li>
                        <li className="sq-item">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Choco} />
                                <span className="sq-item-anchor-title">Choco</span>
                            </a>
                        </li>
                        <li className="sq-item">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Cream} />
                                <span className="sq-item-anchor-title">Cream</span>
                            </a>
                        </li>
                        <li className="sq-item sq-item-long sq-item-float-right">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Cake} />
                                <span className="sq-item-anchor-title">Cake</span>
                            </a>
                        </li>
                        <li className="sq-item">
                            <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Candy} />
                                <span className="sq-item-anchor-title">Candy</span>
                            </a>
                        </li>
                        <li className="sq-item">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Coke} />
                                <span className="sq-item-anchor-title">Coke</span>
                            </a>
                        </li>
                        <li className="sq-item">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Cheeze} />
                                <span className="sq-item-anchor-title">Cheeze</span>
                            </a>
                        </li>
                        <li className="sq-item sq-item-wide">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Cinnamon} />
                                <span className="sq-item-anchor-title">Cinnamon</span>
                            </a>
                        </li>
                        <li className="sq-item">
                        <a className="sq-item-anchor" href="">
                                <img className="sq-item-anchor-cover" 
                                    src={Chili} />
                                <span className="sq-item-anchor-title">Chili</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )                 
    };
};

export default MainSlideComponent;