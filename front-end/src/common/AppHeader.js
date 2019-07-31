import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './AppHeader.css';
import { PinkButton } from '../app/App.js';
import LogoBig from '../img/noogleca_logo.png';


class AppHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.currentUserId
        }
    }

    render() {
        // console.log("AppHeader.js의 State 표시: " + this.state.currentUser.id);
        return (
            <div>
                <nav className = "navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className ="container-fluid">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand"><img src={LogoBig}/></Link>

                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse-main">
                            {this.props.authenticated ? (
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link className="active" to="/">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="/job">My Job</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="" onClick={this.props.onLogout}>Logout</Link></li>
                                </ul>
                            ) : (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link className="active" to="/">Home</Link></li>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/signup">SignUp</Link></li>
                                    </ul>
                            )}

                        </div>
                    </div>
                </nav>
             </div>

        )
    }
}

export default withRouter(AppHeader);