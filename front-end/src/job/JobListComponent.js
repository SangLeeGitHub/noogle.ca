import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import '../user/signup/Signup.css';
// import CreateJobComponent from './CreateJobComponent';
// import JobDetailComponent from './JobDetailComponent';
import {CreateJobComponent, JobDetailComponent} from '.';
import {getJobLists,getCurrentUser } from '../util/APIUtils';
import Alert from 'react-s-alert';
import {PinkButton} from '../app/App';
import NotFound from '../common/NotFound';


class JobListComponent extends Component{

    defaultProps = {
        jobLists: 
        [
            {id: 110, description : 'Learn to Dance', position: "Software Developer 1", cId: 51, uId: 15, url: "http://www.askall.ca" , jobdate:""},
            {id: 220, description : 'hello 2', position: "Tester 2", cId: 10, uId: 5, url: "http://www.askall.ca2" ,jobdate:""},

        ]
    };

    constructor(props){
        super(props);
        this.state = {
            jobLists: 
            [
                {jobId: 10, description : 'Learn to Dance', position: "Software Developer 1", cId: 51, uId: 15, url: "http://www.askall.ca" , jobdate:""},
                {jobId: 20, description : 'hello 2', position: "Tester 2", cId: 10, uId: 5, url: "http://www.askall.ca2" ,jobdate:""},
                {jobId: 30, description : '접니다 3', position: "Developer 3", cId: 10, uId: 15, url: "http://www.askall.ca3" ,jobdate:""},
                {jobId: 40, description : '나여~ 4', position: "Embedded Developer 4", cId: 21, uId: 25, url: "http://www.askall.ca4" ,jobdate:""},
                {jobId: 50, description : '저라니깨여 5', position: "App Developer 5", cId: 31, uId: 35, url: "http://www.askall.ca5" ,jobdate:""}
            ] 
        };
    };

    loadJobLists(){
        const {jobLists} = this.state;   
        getJobLists()
        .then(response => {
          this.setState({
            jobLists: response.concat(...jobLists),
          });
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
          });
      }

      componentDidMount() {
        this.loadJobLists();
        console.log("JobListComponent.js의 State 표시: " + this.state.jobLists);
      }
    
    render(){

        
        const currentPath = this.props.match.url;
        const jobLists = this.state.jobLists;
        return(
            <div className="signup-container">
                <div>
                    <h1>{this.props.currentUser.name}'s Job Lists</h1>
                </div>
                <div>
                    <PinkButton component={Link} to={`${currentPath}/jobdetail`}>Job Detail</PinkButton> &nbsp;&nbsp;
                    <PinkButton component={Link} to="/job/createjob">Create a new Job</PinkButton> &nbsp;&nbsp;

                    {/* <Link component={JobDetailComponent} to={`${currentPath}/jobdetail`}>Job Detail</Link> &nbsp;&nbsp;
                    <Link component={CreateJobComponent} to={`${currentPath}/createjob`}>Add a Job</Link> &nbsp;&nbsp; */}
                    <hr />
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>Position</th>
                            <th>Company Name</th>
                            <th>Job Description</th>
                            <th>User ID</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobLists.map(
                            job =>
                                <tr key={job.jobId}>
                                    <td>{job.jobId}</td>
                                    <td>{job.position}</td>
                                    <td>{job.cId}</td>
                                    <td>{job.description}</td>
                                    <td>{job.uId}</td>
                                    <td>{job.url}</td>
                                </tr>
                        )}

                    </tbody>
                </table>
                {/* <hr />
                            <CreateJobComponent />
                            <JobDetailComponent /> */}
                <hr />
                <Route exact={true} path={currentPath+"/"} render={() => <div><h3>Job Details</h3></div>} />
                <Route path={`${currentPath}/jobdetail`} component={JobDetailComponent}></Route>
                <Route path={`${currentPath}/createjob`} component={CreateJobComponent}></Route>



{/* 
                {console.log(this.props.match.url)}
                {this.props.match.url} */}




            </div>
        );
    }
}

export default JobListComponent;