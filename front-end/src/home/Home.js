import React, { Component } from 'react';
import './Home.css';
// import '../common/AppHeader.css';
import Welcome from './Welcome'
import MainSlideComponent from './MainSlideComponent'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.currentUserId
        }
    }
    render() {
        return (
            <div>
                 <div>
                     {this.props.authenticated ? (
                         <Welcome />
                     ) : (
                        <MainSlideComponent />
                     )}

                </div>
            </div>
        )
    }
}

export default Home;