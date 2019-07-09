import React, {Component} from 'react';

class EmployerSearchComponent extends Component{

    constructor(props){
        super(props);
        console.log("EmployerListComponent.js의 Props 표시:  " + this.props.currentUser.id);
    }

    render(){
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1>Search an Employer</h1>
                    <h5>Please search an employer first, before registration.</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <input type='text' name='employerName'
                                className='form-control' placeholder={`${"Employer's Name"}`}
                                value={this.props.currentUser.position}
                                onChange={this.handleInputChange} required />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EmployerSearchComponent;