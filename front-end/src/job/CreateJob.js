import React, {Component} from 'react';
import '../user/signup/Signup.css';
import {Switch, Route} from 'react-router-dom';
// import Alert from 'react-s-alert';
// import {PinkButton} from '../app/App';
// import {createJob} from '../util/APIUtils';
import CreateJobMenu from './CreateJobMenu';
import SearchEmployer from '../employer/SearchEmployer';
import AddEmployer from '../employer/AddEmployer';
import AddInterviewer from '../interviewer/AddInterviewer';
import AddNewJob from '../job/AddNewJob';

class CreateJob extends Component{
    constructor(props){
        super(props);
        console.log("-- props.currentUser.id in CreateJob.js: " + this.props.currentUser.id);
    }
    render(){
        console.log("Call CreateJob.js");
        const currentPath = `${this.props.match.url}`;

        return(
            <div className="signup-container">
                <h1>Add a New Job</h1>
                <hr />
                <div>
                    <h3>Please follow 4 steps to add a new job.</h3>
                    <CreateJobMenu {...this.props}/>
                </div>
                <div>
                    <Switch>
                        <Route exact path={`${currentPath}`} render={(props)=> <SearchEmployer {...this.props} />}></Route>
                        <Route path={`${currentPath}/addEmployer`} render={(props) => <AddEmployer {...this.props} />}></Route>
                        <Route path={`${currentPath}/addInterviewer`} render={(props)=> <AddInterviewer {...this.props} />}></Route>
                        <Route path={`${currentPath}/addNewJob`} render={(props) => <AddNewJob {...this.props} />}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}



export default CreateJob;
