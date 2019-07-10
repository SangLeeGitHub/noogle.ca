import React, {Component} from 'react';
import {PinkButton} from '../app/App';
import Alert from 'react-s-alert';
import {createInterviewer} from '../util/APIUtils';




class InterviewerCreationFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            responsibility: "",
            email: "",
            phone: "",
            dept: "",
            employerId: 2, //임시로 하드 코딩 this.props.employerId
            userId: 1 //임시로 하드코딩
        }
        console.log("InterviewerCreationFormComponent.js의 Props 표시:  " + this.props.currentUser.uId);

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
        // this.setState({
        //     // employerId: this.props.employerId
        //     employerId: 2  //임시로 하드코딩
        // })
        const interviewerCreationRequest = Object.assign({},  this.state); //{uId: this.props.currentUser.i},
        createInterviewer(this.state.employerId, interviewerCreationRequest)
        .then(response => {
            Alert.success("A New Interviewer is successfully added.");
            this.props.history.push("/job/createjob");
            // this.props.history.push("/login");
        }).catch(error => {
            Alert.error(((error && error.message)) || 'Oops! Something went wrong. Please try again.');
        });   
    };
    

    render() {

        return(

            <div className="signup-container">

                <div className="signup-content">
                <h1>Register New Interviewer Information</h1>
                <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <input type='text' name = 'name'
                            className='form-control' placeholder='Interviewer
                            Name'
                            value = {this.state.name} 
                            onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            <input type="text" name="responsibility" 
                                className="form-control" placeholder="Role of Interviewer"
                                value={this.state.responsibility} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            <input type="email" name="email" 
                                className="form-control" placeholder="Email"
                                value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="phone" 
                                className="form-control" placeholder="Phone Number"
                                value={this.state.phone} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="dept" 
                                className="form-control" placeholder="Department of Interviewer"
                                value={this.state.dept} onChange={this.handleInputChange} />
                        </div>

                        <div className="form-item">
                            <input type="hidden" name="employerId" 
                                className="form-control" 
                                value={this.state.employerId} />
                        </div>


                        <div className="form-item">
                            <PinkButton type="submit">Add an Interviewer</PinkButton>
                        </div>
                    </form>
            </div>
            </div>
        )
    };
}

export default InterviewerCreationFormComponent;