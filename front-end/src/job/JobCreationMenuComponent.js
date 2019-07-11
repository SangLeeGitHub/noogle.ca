import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './JobMenu.css';

class JobCreationMenuComponent extends Component {
    constructor(props){
        super(props);

    }
    render(){
    const currentPath = this.props.match.url;
    return (
        <div className="jobheader">
            <NavLink exact to={`${currentPath}`} className="item" activeClassName="active">Step1. Search Employer</NavLink>
            <NavLink to={`${currentPath}/createEmployer`} className="item" activeClassName="active">Step2. Add Employer</NavLink>
            <NavLink to={`${currentPath}/createInterviewer`} className="item" activeClassName="active">Step3. Add Interviewer</NavLink>
            <NavLink to={`${currentPath}/createNewJob`} className="item" activeClassName="active" >Step4.Add New Job</NavLink>
        </div>
    )}
};

export default withRouter(JobCreationMenuComponent);