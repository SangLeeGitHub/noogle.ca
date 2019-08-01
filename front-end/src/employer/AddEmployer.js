import React, { Component } from 'react';
import { PinkButton } from '../app/App';
import { addEmployer } from '../util/APIUtils';
import Alert from 'react-s-alert';

class AddEmployer extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            city: "",
            province: "",
            country: "",
            employerName: ""
        }
        //employerName: this.props.match.param;
        // this.setState({
        //     employerName: this.props.match.param
        // });
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

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            uId: this.props.currentUser.uId
        })

        const addEmployerRequest = Object.assign({}, this.state);

        //console.log("addEmployerRequest : ", addEmployerRequest);
        addEmployer(addEmployerRequest)
        .then(response => {
            Alert.success("New Employer is added successfully.");
        

        }).catch(error => {
            Alert.error((error && error.message));
        });
    }
    
    render() {
        console.log("Call AddEmployer.js")
        const currentPath = this.props.match.url;
        const employer = this.props.match.param;

        console.log("-- employerName in AddEmployer.js:", this.props);
        console.log("-- currentPath in AddEmployer.js:", currentPath);
        return(
            <div className="signup-container">
                <div className="signup-content">
                    <h1>Register New Employer</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            <input type="text" name="name" className="form-control" placeholder="Employer Name" value={this.state.name} onChange={this.handleInputChange} required />{this.state.employerName}
                        </div>
                        <div className="form-item">
                            <input type="text" name="city" className="form-control" placeholder="Waterloo" value={this.state.city} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            <input type="text" name="province" className="form-control" placeholder="ON" value={this.state.province} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="country" className="form-control" placeholder="Canada" value={this.state.country} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <PinkButton type="submit">Submit</PinkButton>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddEmployer;