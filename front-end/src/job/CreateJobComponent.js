import React, {Component} from 'react';
import '../user/signup/Signup.css';
import {Link, withRouter, Switch, Route} from 'react-router-dom';
import Alert from 'react-s-alert';
import {PinkButton} from '../app/App';
import {createJob} from '../util/APIUtils';
import {JobDetailComponent, JobCreationMenuComponent,JobCreationFormComponent} from '.';
import { EmployerSearchComponent, EmployerCreationFormComponent, InterviewerCreationFormComponent } from '../employer';
import './JobMenu.css';
class CreateJobComponent extends Component{
    constructor(props){
        super(props);    
        this.state = {
            authenticated: props.authenticated,
            // currentUser: props.currentUser,
          };

        console.log("CreateJobComponent.js의 Props 중 표시:  " + this.state.authenticated);
        console.log("CreateJobComponent.js의 Props 중 userID 표시:  " + this.props.currentUser.id);
    }
    render(){
        const currentPath = `${this.props.match.url}`;
        console.log(currentPath);
        return(
            <div>
                <div>
                    <div className="signup-container">
                        <h1>Add a New Job</h1>
                        <hr />
                        <div>
                            <h3>Please follow 4 steps to add a new job.</h3>
                            <JobCreationMenuComponent currentUser={this.props.currentUser} {...this.props} />
                        </div>
                        <p />

                    </div>
                    <div>
                        <Switch>
                            <Route exact path={`${currentPath}/`} 
                                component= {({props}) => <EmployerSearchComponent  currentUser={this.props.currentUser} {...props}/>}>
                            </Route>
                            <Route path={`${currentPath}/createEmployer`} 
                                {...this.props} 
                                render={(props) => <EmployerCreationFormComponent currentUser ={this.props.currentUser} {...props}/>}></Route>
                            <Route path={`${currentPath}/createInterviewer`} 
                                {...this.props} 
                                render={(props) => <InterviewerCreationFormComponent currentUser ={this.props.currentUser} {...props}/>}></Route>
                            <Route path={`${currentPath}/createNewJob`}  
                                {...this.props} 
                                render={(props) => <JobCreationFormComponent currentUser ={this.props.currentUser} {...props}/>}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}




export default withRouter(CreateJobComponent);
