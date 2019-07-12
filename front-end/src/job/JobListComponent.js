import React, {Component} from 'react';
import {Link, Route, withRouter,Switch} from 'react-router-dom';
import '../user/signup/Signup.css';
import PrivateRoute from '../common/PrivateRoute';
import {CreateJobComponent, JobDetailComponent} from '.';
import {getJobLists,getCurrentUser } from '../util/APIUtils';
import Alert from 'react-s-alert';
import {PinkButton} from '../app/App';




class JobListComponent extends Component{

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
                // {createdAt: "2019-07-09T18:33:33Z", position: "Game Developer 5", description : 'From Default State 2',  employer_name: "Samsung", uId: 35, url: "http://www.askall.ca5"}
            ]
        };
    };

    componentDidMount() {
        this.loadJobLists();
        //console.log("JobListComponent.js State: " + this.state.jobLists);
    }

    loadJobLists(){
        const {jobLists} = this.state;

        getJobLists(this.props.currentUser.id)
        .then(response => {
            this.setState({jobLists: response.concat(...jobLists),
            });
        }).catch(error => {
            Alert.error((error && error.message ) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render(){

        const currentPath = `${this.props.match.url}`;
        const jobLists = this.state.jobLists;

        console.log("currentPath: ", currentPath);
        console.log("jobLists: ", jobLists);
        return(
            <div className="signup-container">
                <div>
                    <h1>{this.props.currentUser.name}'s Job List</h1>
                    {currentPath}
                </div>
                <div>
                    <PinkButton component={Link} to={`${currentPath}/jobDetail`}>Job Details</PinkButton>&nbsp;&nbsp;&nbsp;
                    <PinkButton component={Link} to={`${currentPath}/createjob`}>Add a new Job</PinkButton>
                </div>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Date Created</th> */}
                            <th>Position</th>
                            <th>Company Name</th>
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
                                    <td>{job.companyName}</td>
                                    <td>{job.description}</td>
                                    {/* <td>{job.uId}</td> */}
                                    <td>{job.url}</td>
                                </tr>
                        )}
                    </tbody>
                    {/* <tbody>
                        {jobLists.map(
                            job =>
                                <tr key={job.jobId}>
                                    <td>{job.createdAt}</td>
                                    <td>{job.position}</td>
                                    <td>{job.employer_name}</td>
                                    <td>{job.description}</td>
                                    <td>{job.uId}</td>
                                    <td>{job.url}</td>
                                </tr>
                        )}
                    </tbody> */}
                </table>

                <Switch>
                    <Route exact path={`${currentPath}/jobDetail`} render={()=><div><h1>Job Details</h1></div>}></Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(JobListComponent);