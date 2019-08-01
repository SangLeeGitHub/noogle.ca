import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../user/signup/Signup.css';
//import PrivateRoute from '../common/PrivateRoute';
//import {CreateJob, JobDetail} from '.';
import {getJobLists } from '../util/APIUtils';
import Alert from 'react-s-alert';
import {PinkButton} from '../app/App';




class JobList extends Component{

    // defaultProps = {
    //     jobLists:
    //     [
    //         {id: 110, description : 'Learn to Dance', position: "Software Developer 1", cId: 51, uId: 15, url: "http://www.askall.ca" , jobdate:""},
    //         {id: 220, description : 'hello 2', position: "Tester 2", cId: 10, uId: 5, url: "http://www.askall.ca2" ,jobdate:""},
    //     ]    
    // };

    constructor(props){
        super(props);
        this.state = {
            jobLists: 
            [

            ]
        };
    };

    componentDidMount() {
        this.loadJobLists();
        //console.log("JobListComponent.js State: " + this.state.jobLists);
    }

    loadJobLists(){
        //const {jobLists} = this.state;

        console.log("-- loadJobList()");
        // console.log("-- this.props.currentUser.id in loadJobList method in JobList: ", this.props.currentUser.id);
        getJobLists(this.props.currentUser.id)
        .then(response => {
            this.setState({
                jobLists: response//.concat(...jobLists),
            });
        }).catch(error => {
            Alert.error(error && error.message );
        });
    }
    
    render(){

        const currentPath = `${this.props.match.url}`;
        const jobLists = this.state.jobLists;

        console.log("Call JobList");
        console.log("-- currentPath in JobList.js:  ", currentPath);
        console.log("-- jobLists in JobList.js: ", jobLists);
        console.log("-- this.props.currentUser.id in loadJobList method in JobList: ", this.props.currentUser.id);
        return(
            <div className="signup-container">
                <div>
                    <h1>{this.props.currentUser.name}'s Job List</h1>
                    {/* {currentPath} */}
                </div>
                <div className="form-item">
                    {/* <PinkButton component={Link} to={`${currentPath}/jobDetail`}>Job Details</PinkButton>&nbsp;&nbsp;&nbsp; */}
                    <PinkButton component={Link} to={`${currentPath}/createjob`}>Add a new Job</PinkButton>
                </div>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Date Created</th> */}
                            <th>Position</th>
                            {/* <th>Employer Name</th> */}
                            <th>Job Description</th>
                            {/* <th>User ID</th> */}
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobLists.map(
                            job =>
                                <tr key={job.jobId}>
                                    {/* <td>{job.createdAt}</td> */}
                                    <td>{job.position}</td>
                                    {/* <td>{job.employerName}</td> */}
                                    <td>{job.description}</td>
                                    {/* <td>{job.uId}</td> */}
                                    <td>{job.url}</td>
                                </tr>
                        )}
                    </tbody>

                </table>

                {/* <Switch>
                    <Route exact path={`${currentPath}/jobDetail`} render={()=><div><h1>Job Details</h1></div>}></Route>
                </Switch> */}
            </div>
        );
    }
}

export default JobList;