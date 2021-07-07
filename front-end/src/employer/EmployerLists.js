import React, { Component } from 'react';

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

export default EmployerLists;