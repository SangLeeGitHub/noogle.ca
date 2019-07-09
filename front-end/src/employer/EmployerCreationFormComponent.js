import React, {Component} from 'react';
import {PinkButton} from '../app/App';
import Alert from 'react-s-alert';
import {createEmployer} from '../util/APIUtils';




class EmployerCreationFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            city: "",
            province: "",
            country: "",
            // interviewers: []
        }
        console.log("JobCreationComponent.js의 Props 표시:  " + this.props.currentUser.uId);

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
        this.setState({
            uId: this.props.currentUser.id
        })
        const employerCreationRequest = Object.assign({},  this.state); //{uId: this.props.currentUser.i},
        createEmployer(employerCreationRequest)
        .then(response => {
            Alert.success("A New Employer is successfully added.");
            this.props.history.push("/job");
            // this.props.history.push("/login");
        }).catch(error => {
            Alert.error(((error && error.message)) || 'Oops! Something went wrong. Please try again.');
        });   
    };
    

    render() {

        return(

            <div className="signup-container">

                <div className="signup-content">
                <h1>Register New Employer Information</h1>
                <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <input type='text' name = 'name'
                            className='form-control' placeholder='Employer
                            Name'
                            value = {this.state.position} 
                            onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            {/* <p id="profile-name-hint" className="input-hint">
                            Company Name: <samp>Amazon: 테스트할때는 숫자를 넣어주세요.</samp>. </p> */}
                            <input type="text" name="city" 
                                className="form-control" placeholder="Waterloo"
                                value={this.state.city} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            <input type="text" name="province" 
                                className="form-control" placeholder="ON"
                                value={this.state.province} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="country" 
                                className="form-control" placeholder="Country"
                                value={this.state.country} onChange={this.handleInputChange} />
                        </div>
                        {/* <div className="form-item">
                            <textarea type="text" name="description" 
                                style={{resize: "none", height: "100px"}}
                                className="form-control" placeholder="Job Description"
                                value={this.state.description} onChange={this.handleInputChange} />
                        </div> */}

                        {/* <div className="form-item">
                            <input type="text" name="uId" 
                                className="form-control" placeholder={this.props.currentUser.id}
                                value={this.state.uId} onChange={this.handleInputChange} disabled/>
                        </div> */}
                        <div className="form-item">
                            <PinkButton type="submit">Add an Employer</PinkButton>
                        </div>
                    </form>
            </div>
            </div>
        )
    };
}

export default EmployerCreationFormComponent;