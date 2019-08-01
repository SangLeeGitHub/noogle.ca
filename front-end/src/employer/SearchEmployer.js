import React, {Component} from 'react';
import { PinkButton } from '../app/App';
import Alert from 'react-s-alert';
import {Link} from 'react-router-dom';
import {searchEmployer} from '../util/APIUtils';
//import PrivateRoute from '../common/PrivateRoute';
//import { EmployerLists } from 'EmployerLists';

class SearchEmployer extends Component{
    constructor( props ){
        super(props);
        this.state = {
            employers: [],
            existName : false,
            employerName : "",
            firstSearch : true
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Call function handleSubmit in SearchEmployer.js ");

        this.setState({
            firstSearch: false
        });
        //const searchEmployerRequest = Object.assign({}, this.state);

        searchEmployer(this.state.employerName)
        .then(response => {
            if( response.length === 0 ){
                Alert.success("No employer Found.");
                this.setState({
                    existName: false
                });
                
            }
            else{
                Alert.success("Searching Employer is successful");
                this.setState({
                    employers: response,
                    existName: true
                })
            }
        }).catch(error => {
            Alert.error((error && error.message));
        });
    }

    render() {
        console.log("Call SearchEmployer.js");
        const currentPath = `${this.props.match.url}`;
        console.log("-- currentPath in SearchEmployer: " + currentPath);
        return(
            <div className="signup-container">
                <div className="signup-content">
                    <h1>Search Employer</h1>
                    <h5>Please search an employer first before registration.</h5>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="employerName" className="form-control" placeholder="Employer's name" value={this.state.employerName} onChange={this.handleInputChange} required/>
                        <br /><br />
                        <div className="form-item">
                            <nav className="app-nav">
                                {/* <ul>
                                    <li>
                                        <PinkButton type="submit">Search</PinkButton>
                                    </li>
                                </ul> */}
                                {(!this.state.firstSearch && !this.state.existName) ? (
                                    <ul>
                                        <li>
                                            <PinkButton type="submit">Search</PinkButton>
                                        </li>
                                        <li>
                                            <PinkButton component={Link} to={`${currentPath}/addEmployer/:`+ this.state.employerName}>Add Employer</PinkButton>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul>
                                        <li>
                                            <PinkButton type="submit">Search</PinkButton>
                                        </li>
                                    </ul>
                                    )}
                            </nav>
                        </div>
                        {/* <div className="form-item">
                            <PinkButton type="submit">Search</PinkButton>
                        </div> */}
                    </form>
                    {!this.state.existName ?
                        <div></div> :
                        <div>
                            <EmployerLists allEmployers={this.state.employers}/>
                        </div>    
                    }
                </div>
            </div>
        );
    }
}

class EmployerLists extends Component{
    constructor(props){
        super(props);
        this.state = {
            employers: []
        }
    }

    render(){
        const employerLists = this.props.allEmployers;
        return(
            <div>
                <h1>Employers Found</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employer Name</th>
                                <th>City</th>
                                <th>Province</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employerLists.map(
                                employer => 
                                <tr key={employer.id}>
                                    <td>{employer.name}</td>
                                    <td>{employer.city}</td>
                                    <td>{employer.province}</td>
                                    <td>{employer.country}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default SearchEmployer;
export {EmployerLists};
