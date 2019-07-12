import React, { Component } from 'react';
import './Profile.css';
import PinkButton from '../../app/App';
import {Link, Route,NavLink, Switch, withRouter} from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import { Button } from "@material-ui/core";
import PrivateRoute from '../../common/PrivateRoute';


class Profile extends Component {
  
    constructor(props) {
        super(props);
        //console.log(props);
        // this.state = {
        //   updateModeClicked: false
        // };
        console.log("-- constructor inside the Profile.js");
        console.log("-- this.props.authenticated in constructor of Profile.js : " + this.props.authenticated);
        console.log("-- this.props.currentUser.name  in constructor of Profile.js : " + this.props.currentUser.name);
    }

    updateModeClicked = (props) => {
        this.setState({
            updateModeClicked: true
        });
        console.log("-- updateModeClicked inside the Profile.js");
        return (<PrivateRoute path="/profile/updateProfile" 
        {...this.props}></PrivateRoute>);
    }
    render() {
        const updateModeClicked = this.state;

        console.log("call turn : 2 - Profile.js");
        console.log("-- render inside the Profile.js");
        console.log("-- currentUser.name inside the Profile.js : " + this.props.currentUser.name);
        console.log("-- currentUser.email inside the Profile.js : " + this.props.currentUser.email);

        //var that = this.props;
        console.log("authenticated value in the render in profile.js : "+ this.props.authenticated);
        //var that = this;
        //() => {return console.log("this.props.authenticated value : "+ this.props.authenticated)}
        //function () {return console.log("this.props.authenticated value : "+ this.props.authenticated) }.bind(this);
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>Current Logged-In User Information</h2>
                           <p className="profile-email">  User Name: {this.props.currentUser.name} </p>
                           <p className="profile-email">User Email: {this.props.currentUser.email}</p>
                        </div>
                        <hr />

                        {/* 개인정보 수정을 위한 버튼 */}
                        <div> 
                            <p className="profile-email">If you want to modify user information, Please click the "UPDATE" button.</p>
                                <Button  onClick = {this.updateModeClicked} className="modify" >Update </Button>
                                {/* <PinkButton  onClick = {this.updateModeClicked} className="modify" >Update </PinkButton> */}
                                {updateModeClicked && <UpdateProfile currentUser={this.props.currentUser}></UpdateProfile>}
                                {/* {...this.props}생략 */}
                                {/* <PinkButton onClick={this.updateModeClicked}>Update</PinkButton> */}
                                
                        </div>
                        
                    </div>
                </div>    
            </div>
        );
    }
}

export default withRouter(Profile);