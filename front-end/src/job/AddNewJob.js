import React, { Component } from 'react';
import Alert from 'react-s-alert';
import { PinkButton } from '../app/App';
import { addNewJob } from '../util/APIUtils';

class AddNewJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: "",
            employerId: 2, //hard coding
            description: "",
            url: "",
            userId: 1 //hard coding
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event){
        const target = event.target;
        const inputName= target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const addNewJobRequest = Object.assign({}, this.state);

        addNewJob(this.state.userId, this.state.employerId, addNewJobRequest)
        .then(response => {
            Alert.success("New Job is added successfully");
            
        }).catch(error => {
            Alert.error((error && error.message));
        })
    }

    render() {
        console.log("Call AddNewJob.js");
        const currentPath = `${this.props.match.url}`;
        console.log("currentPath in AddNewJob.js: ", currentPath);

        return(
            <div className="Signup-container">
                <div className="signup-content">
                    <h1>Register New Job</h1>
                    <hr />

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            {/* <input type="text" name="position"
                                className="form-control" placeholder="Job position"
                                value={this.state.position}
                                onChange={this.handleInputChange} required />    */}
                            <input type="text" name="position" className="form-control" placeholder="Job Position" value={this.state.position} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            <input type="text" name="description" className="form-control" placeholder="Job Description" value={this.state.description} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="url" className="form-control" placeholder="URL - Job posting" value={this.state.url} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <PinkButton type="submit">Submit</PinkButton>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddNewJob;