import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './JobMenu.css';

class CreateJobMenu extends Component{
    // constructor(props){
    //     super(props);

    // }

    render() {
        const currentPath = this.props.match.url;
        console.log("Call CreateJobMenu.js");
        return(
            <div className="jobHeader">
                <NavLink exact to={currentPath} className="item" activeClassName="active">Step1 <br/>Search Employer</NavLink>
                <NavLink exact to={`${currentPath}/AddEmployer`} className="item" activeClassName="active">Step2 <br/>Add Employer</NavLink>
                <NavLink exact to={`${currentPath}/AddInterviewer`} className="item" activeClassName="active">Step3 <br/>Add Interviewer</NavLink>
                <NavLink exact to={`${currentPath}/AddNewJob`} className="item" activeClassName="active">Step4 <br/>Add New Job</NavLink>

                {/* <NavLink exact to={currentPath} className="item" activeClassName="active">Step1. Search Employer</NavLink>
                <NavLink exact to={`${currentPath}/AddEmployer`} className="item">Step2. Add Employer</NavLink>
                <NavLink exact to={`${currentPath}/AddInterviewer`} className="item">Step3. Add Interviewer</NavLink>
                <NavLink exact to={`${currentPath}/AddNewJob`} className="item">Step4. Add New Job</NavLink> */}
            </div>
        );
    }
}

export default CreateJobMenu;