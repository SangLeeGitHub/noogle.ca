import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {updateInfo } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import { PinkButton } from "../../app/App";

class UpdateProfile extends Component{
    constructor(props) {
        super(props);
        console.log("name in UpdateProfile : " + this.props.currentUser.name);
        console.log("email in UpdateProfile : " + this.props.currentUser.email);
        console.log("password in UpdateProfile : " + this.props.currentUser.password);
        //this.updateProfile = this.updateProfile.bind(this);

    }

    // updateProfile(){
    //     this.props.update(this.state);
    // }

    render(){
        return(
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Update User Information</h1>
                    <div className="or-separator">Please modify detail Information to Update.
                    </div>
                    <UpdateForm {...this.props} />
                    {/* <UpdateForm {...this.props} update={this.updateProfile}/> */}
                </div>
            </div>            
    
        );
    }
}

class UpdateForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            //currentUser: props.currentUser
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();

        const updateRequest = Object.assign({}, this.state);

        updateInfo(updateRequest)
        .then(response => {
            //localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            this.setState({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
            // this.props.update(this.state);
            console.log("Before push to /login in UpdateProfile.js");
            this.props.history.push("/login");
            console.log("After push to /login in UpdateProfile.js");
            //this.props.onLogin();
            //setTimeout(function () { Alert.success("You're successfully logged in!") }, 300);

            Alert.success("Your profile's successfully updated!");
            // setTimeout( () => { Alert.success("Your profile's successfully updated!") }, 300);
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                {console.log("currentUser name in the render in UpdateProfile :" + this.props.currentUser.name)}
                <label>User Name: &nbsp;&nbsp;</label>
                    <input type="text" name="name" 
                        className="form-control" placeholder={this.props.currentUser.name}
                        value={this.state.name} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                <label>Email: &nbsp;&nbsp;</label>
                    <input type="text" name="email" 
                        className="form-control" placeholder={this.props.currentUser.email}
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                <label>Password: &nbsp;&nbsp;</label>
                    <input type="text" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <PinkButton type="submit">Update</PinkButton>
                </div>
            </form>                    
        );
    }
}

export default withRouter(UpdateProfile);