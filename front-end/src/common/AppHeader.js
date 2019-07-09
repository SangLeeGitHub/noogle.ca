import React, { Component } from 'react';
import {Link, NavLink, Switch, withRouter} from 'react-router-dom';
import './AppHeader.css';
import { PinkButton } from '../app/App.js'

class AppHeader extends Component {

    render() {

        // console.log(" header this.props.authenticated: " + this.props.authenticated);
        // console.log(" header this.props: " + this.props);

        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">누굴까?</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <PinkButton component={Link} to="/Job">Job</PinkButton>
                                        </li>
                                        <li>
                                            <PinkButton component={Link} to="/profile">Profile</PinkButton>
                                        </li>
                                        <li>
                                            <PinkButton onClick={this.props.onLogout}>Logout</PinkButton>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <PinkButton component={Link} to="/login">Login</PinkButton>
                                        </li>
                                        <li>
                                            <PinkButton component={Link} to="/signup">Signup</PinkButton>
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;