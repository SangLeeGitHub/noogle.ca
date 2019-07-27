import React, {Component} from 'react';
import { PinkButton } from '../app/App';
import {EmployerCreationFormComponent, EmployerListsComponent} from '.';
import {Link, Switch, withRouter,Route} from 'react-router-dom';
import {searchEmployer, } from '../util/APIUtils';
import Alert from 'react-s-alert';

class EmployerSearchComponent extends Component{

    constructor(props){
        super(props);
        console.log("EmployerSearchComponent.js의 Props 표시:  " + this.props.currentUser);
        this.state = {
            isEmployPresent: false,
            employers:[]
        };
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

        const interviewerCreationRequest = Object.assign({},  this.state); //{uId: this.props.currentUser.i},
        searchEmployer(this.state.employerName)
        .then(response => {
            if(response.length === 0){
                Alert.success("No employer(s) Found.");
                this.setState({
                    isEmployPresent: false
                });
                                // this.props.history.replace("/job/createjob");
                // return <h1>No Employer Found.</h1>;
                console.log("데이터 없어유~");
                this.searchInput.focus();
                this.searchInput.select();

            }
            else{
                Alert.success("Employer(s) found successfully.");
                this.setState({
                    employers: response,
                    isEmployPresent: true
                });
                console.log("자료가 있네요~");
            }
 
            //this.props.history.push("/job/createjob/createEmployer");
            
            // this.props.history.push("/login");
        }).catch(error => {
            Alert.error(((error && error.message)) || 'Oops! Something went wrong. Please try again.');
        });   
    };

    componentDidMount(){
        this.searchInput.focus();
    }
    render(){
        console.log(this.state.employers);
        const currentPath = `${this.props.match.url}`;
        console.log(currentPath);
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1>Search an Employer</h1>
                    <h5>Please search an employer first, before registration.</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <input
                                ref = {(input) => {this.searchInput = input}} 
                                type='text' name='employerName'
                                className='form-control' placeholder={`${"Employer's Name"}`}
                                value={this.state.employerName}
                                onChange={this.handleInputChange} required />
                        </div>
                        <div>
                            <PinkButton type="submit" >Search</PinkButton> &nbsp;&nbsp;
                            <PinkButton component={Link} to={`${currentPath}/createEmployer`}>Next Step</PinkButton> &nbsp;&nbsp;
                         </div>
                    </form>
        
                    {!this.state.isEmployPresent ?
                        <div></div> : 
                    <div>
                        <hr />
                        <EmployerListsComponent allEmployers={this.state.employers}/>
                    </div>
                    }
                    
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