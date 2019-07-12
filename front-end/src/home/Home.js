import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        console.log("-- Home.js");
        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div>
                    <h1 className="home-title">NOOGLE.CA</h1>
                </div>
            </div>
        )
    }
}

export default Home;