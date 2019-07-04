import React, {Component} from 'react';
import PrivateRoute from '../../common/PrivateRoute';
import Profile from './Profile';
import {SignupForm} from '../signup/Signup'
import {updateInfo } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import { PinkButton } from "../../app/App";
class UpdateProfile extends Component{
    constructor(props) {
        super(props);
        console.log("from Constructor of UpdateProfile: " + props);
    }

    render(){
        return(

            <div>
                <div>
                    <h1>Update User Information</h1>
                </div>
                <div>
                <h3>Please modify detail Information to Update.</h3>

                    {console.log("updatedProfile: " +this.props.currentUser.email)}
                
                    {/* <p className="profile-email">{this.props.currentUser.email}</p> */}
                </div>
                <div>
                    <UpdateForm {...this.props} />
                </div>
            </div>
        );
    }
}

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.currentUser.name);
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

        updateInfo(updateRequest)  //this mothod is declared in APIUtils
        .then(response => {
            Alert.success("Information is successfully updated. Enjoy!");
            this.setState({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
            this.props.history.replace("/profile");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    }
     

    render() {
        return (
            
            <form onSubmit={this.handleSubmit} id = "updateForm">
                <div className="form-item">
                    <div>
                    {console.log(this.props.currentUser.name)}
                        <label>User Name: &nbsp;&nbsp;</label>
                        <p id="profile-name-hint"
                                class="input-hint">
                                Can be found on your detail profile information.
                                Example: <samp>EricJJang</samp>.
                            </p>
                        <input  type="text" name="name"
                            className="form-control" placeholder={this.props.currentUser.name}
                            value={this.state.name} onChange={this.handleInputChange} required />
                    </div>
                </div>
                <div className="form-item">
                    <div>
                        <label>Email: &nbsp;&nbsp;</label>
                        <input type="email" name="email" 
                            className="form-control" placeholder={this.props.currentUser.email}
                            value={this.state.email} onChange={this.handleInputChange} required/>
                    </div>
                    
                </div>
                <div className="form-item">
                    <label>Password: &nbsp;&nbsp;</label>
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <PinkButton type="submit">Apply</PinkButton>
                </div>
                
            </form>                    

        );
    }
}

export default UpdateProfile;