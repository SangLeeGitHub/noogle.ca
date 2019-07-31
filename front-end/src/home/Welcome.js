import React, { Component } from 'react';
import './Home.css';


import Candy from '../img/candy.png';
import Cheeze from '../img/cheeze.png';
import FileExplorer from '../img/file-explorer.png';
import Crepe from '../img/crepe.png';



class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.currentUserId
        }
    }
    render() {
        return (
            <div>
                <div id="home">
                    <div className="landing-text">
                        <h1>Welcome !!!</h1>
                        <h3>Manage your job applications with ease.</h3>
                        <a href="" className="btn btn-default btn-lg">Get Started</a>
                    </div>
                </div>
            </div>
        )                 
    };
};

export default Welcome;