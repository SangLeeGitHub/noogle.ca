import React, {Component} from 'react';
import { PinkButton } from '../app/App';
import {EmployerCreationFormComponent} from '.';
import {Link, Switch, withRouter,Route} from 'react-router-dom';
import {JobDetailComponent, JobCreationFormComponent} from '../job';
class EmployerSearchComponent extends Component{

    constructor(props){
        super(props);
        console.log("EmployerSearchComponent.js의 Props 표시:  " + this.props.currentUser);
        this.state = {
            isEmployPresent: false,
            isInterviewercreated: false,
            isJobCreated: false,
            employerName: ""
        }
    }

    render(){
        const currentPath = `${this.props.match.url}`;
        console.log(currentPath);
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1>Search an Employer</h1>
                    <h5>Please search an employer first, before registration.</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <input type='text' name='employerName'
                                className='form-control' placeholder={`${"Employer's Name"}`}
                                value={this.state.employerName}
                                onChange={this.handleInputChange} required />
                        </div>
                    </form>

                    <PinkButton component={Link} to={`${currentPath}`}>Search</PinkButton> &nbsp;&nbsp;
                </div>
                {/* <div>
                    <p />
                    <PinkButton id="btn1" component={Link} to="/job/createjob/createEmployer" >Add a New Employer</PinkButton> &nbsp;&nbsp;
                </div> */}
                    {/* <Switch>
                    <Route path="/job/createjob/createEmployer" currentUser={this.props.currentUser} {...this.props} component={EmployerCreationFormComponent}></Route>
                    </Switch> */}
            </div>
        )
    }
}

export default withRouter(EmployerSearchComponent);