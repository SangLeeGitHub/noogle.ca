import React, {Component} from 'react';
import {PinkButton} from '../app/App';
import Alert from 'react-s-alert';
import {createEmployer} from '../util/APIUtils';
import {Link, withRouter, Switch, Route} from 'react-router-dom';
import {InterviewerCreationFormComponent} from '.';




class EmployerCreationFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            city: "",
            province: "",
            country: "",
            // interviewers: []
        }
        console.log("EmployerCreationFormComponent.js의 Props 표시:  " + this.props.currentUser);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            uId: this.props.currentUser.id
        })
        const employerCreationRequest = Object.assign({},  this.state); //{uId: this.props.currentUser.i},
        createEmployer(employerCreationRequest)
        .then(response => {
            Alert.success("A New Employer is successfully added.");
            this.props.history.push("/job/createjob/createEmployer/createInterviewer");
            // this.props.history.push("/login");
        }).catch(error => {
            Alert.error(((error && error.message)) || 'Oops! Something went wrong. Please try again.');
        });   
    };
    

    render() {
        const currentPath = `${this.props.match.url}`;

        return(

            <div className="signup-container">

                <div className="signup-content">
                <h1>Register New Employer Information</h1>
                <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <input type='text' name = 'name'
                            className='form-control' placeholder='Employer
                            Name'
                            value = {this.state.position} 
                            onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            <input type="text" name="city" 
                                className="form-control" placeholder="Waterloo"
                                value={this.state.city} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            <input type="text" name="province" 
                                className="form-control" placeholder="ON"
                                value={this.state.province} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="country" 
                                className="form-control" placeholder="Country"
                                value={this.state.country} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <PinkButton type="submit">Submit</PinkButton>
                        </div>
                    </form>

                    <h3>Proceed to add a New Interviewer</h3>
                    {/* <PinkButton component={Link} to={`${currentPath}/createInterviewer`}>Add New Interviewer</PinkButton> &nbsp;&nbsp; */}
                    {/* <Switch>
                        <Route exact path={`${currentPath}/createInterviewer`} currentUser={this.props.currentUser} {...this.props} component={InterviewerCreationFormComponent}></Route>
                        <Route path={`${currentPath}/jobdetail/:jobId`} currentUser={this.props.currentUser} component={JobDetailComponent}></Route>
                    </Switch> */}
            </div>
            </div>
        )
    };
}

export default withRouter(EmployerCreationFormComponent);