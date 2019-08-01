import React, { Component } from 'react';
import {PinkButton} from '../app/App';
import Alert from 'react-s-alert';
import { addInterviewer } from '../util/APIUtils';

class AddInterviewer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            responsibility: "",
            email: "",
            phone: "",
            dept: "",
            employerId: 2,//hard coding
            // userId: 1//hard coding
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        })
    }

    handleSubmit(event){
        event.preventDefault();
        // this.setState({
        //     uId: this.props.currentUser.id
        // })

        
        const addInterviewerRequest = Object.assign({}, this.state);

        addInterviewer(this.state.employerId, addInterviewerRequest)
        .then(response => {
            Alert.success("New Interviewer is added successfully");

        }).catch(error => {
            Alert.error((error && error.message));
        })
    }

    render() {
        console.log("Call AddInterviewer.js");
        const currentPath = `${this.props.match.url}`;
        console.log("-- currentPath in AddInterviewer.js:", currentPath);

        return(
            <div className="signup-container">
                <div className="signup-content">
                    <h1>Register New Interviewer</h1>
                    <hr />

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-item">
                                <input type="text" name="name" className="form-control" placeholder="Employer Name" value={this.state.name}
                                onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-item">
                                <input type="text" name="responsibility" className="form-control" placeholder="Role of Interviewer" value={this.state.responsibility} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-item">
                                <input type="text" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-item">
                                <input type="text" name="phone" className="form-control" placeholder="phone" value={this.state.phone} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-item">
                                <input type="text" name="dept" className="form-control" placeholder="Department of Interviewer" value={this.state.dept} onChange={this.handleInputChange} />
                            </div>
                            <div>
                                <PinkButton type="submit">Submit</PinkButton>
                            </div>
                        </form>
                </div>

            </div>
        );

    }
}

export default AddInterviewer;