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
                // {jobId: 10, description : 'Learn to Dance', position: "Software Developer 1", cId: 51, uId: 15, url: "http://www.askall.ca" , jobdate:""},
                // {jobId: 20, description : 'hello 2', position: "Tester 2", cId: 10, uId: 6, url: "http://www.askall.ca2" ,jobdate:""},
                // {jobId: 30, description : '접니다 3', position: "Developer 3", cId: 10, uId: 15, url: "http://www.askall.ca3" ,jobdate:""},
                // {jobId: 40, description : '나여~ 4', position: "Embedded Developer 4", cId: 21, uId: 6, url: "http://www.askall.ca4" ,jobdate:""},
                
                {createdAt: "2019-07-08T18:33:33Z", position: "App Developer 5", description : 'Default State 1',  employer_name: "LGE", url: "http://www.askall.ca5"},
                {createdAt: "2019-07-09T18:33:33Z", position: "Game Developer 5", description : 'From Default State 2',  employer_name: "Samsung", url: "http://www.askall.ca5"}
            ] 
        };
    };

    loadJobLists(){
        const {jobLists} = this.state;

        getJobLists(this.props.currentUser.id)
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

        
        // const currentPath = this.props.match.url;
        const currentPath = `${this.props.match.url}`;
        const jobLists = this.state.jobLists;

        console.log("currentPath:", currentPath);

        return(
            <div className="signup-container">
                <div>
                    <h1>{this.props.currentUser.name}'s Job Lists</h1>
                    {currentPath}
                </div>
                <div>
                    <PinkButton currentUser={this.props.currentUser} {...this.props} component={Link} to={`${currentPath}/jobdetail`}>Job Detail</PinkButton> &nbsp;&nbsp;
                    <PinkButton component={Link} to={`${currentPath}/createjob`}>Add a new Job</PinkButton> &nbsp;&nbsp;
                    <hr />
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Date Created</th>
                            <th>Position</th>
                            <th>Employer Name</th>
                            <th>Job Description</th>
                            <th>User ID</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobLists.map(
                            job =>
                                <tr key={job.jobId}>
                                    <td>{job.createdAt}</td>
                                    <td>{job.position}</td>
                                    <td>{job.employer_name}</td>
                                    <td>{job.description}</td>
                                    <td>{job.userId}</td>
                                    <td>{job.url}</td>
                                </tr>
                        )}

                    </tbody>
                </table>

                <hr />

                <Switch>
                    <Route exact path={`${currentPath}/jobdetail`} render={() => <div><h1>Job Details</h1></div>}></Route>
                    <Route path={`${currentPath}/jobdetail/:jobId`} currentUser={this.props.currentUser} component={JobDetailComponent}></Route>
                </Switch>




            </div>
        );
    }
}

export default withRouter(JobListComponent);