import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './AppHeader.css';
import './Footer.css';
import LogoSimple from '../img/noogleca_logo-n.png';


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.currentUserId
        }
    }

    render() {
        return (
            <div className="footer container-fluid text-center">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Contact Us</h2>
                        <br />
                        <h4>Waterloo, ON, Canada</h4>
                        <h4>Tel. 519-716-0959</h4>
                    </div>
                    <div className="col-sm-4">
                        <h2>Connect</h2>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-github"></a>

                    </div>
                    <div className="col-sm-4">
                        <img src={LogoSimple} className="icon" />
                    </div>
                </div>

            </div>

        )
    }
}

export default withRouter(Footer);