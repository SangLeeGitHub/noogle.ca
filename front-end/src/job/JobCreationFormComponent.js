import React, {Component} from 'react';
import '../user/signup/Signup.css';
import {Link, withRouter, Switch, Route} from 'react-router-dom';
import Alert from 'react-s-alert';
import {PinkButton} from '../app/App';
import {createJob} from '../util/APIUtils';


class JobCreationFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            position: "",
            employerId: 2, //일단 HardCoding
            description: "",
            url: "",
            // users_id: `${this.props.currentUser.id}`
            userId: 1 //일단 HardCoding
        }
        // console.log("JobCreationComponent.js의 Props 표시:  " + this.props.currentUser.id);

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
            users_id: this.props.currentUser.id
        })
        const createJobRequest = Object.assign({},  this.state); //{uId: this.props.currentUser.i},
        createJob(this.state.userId, this.state.employerId, createJobRequest)
        .then(response => {
            Alert.success("Your job is successfully added.");
            this.props.history.push("/job");
            // this.props.history.push("/login");
        }).catch(error => {
            Alert.error(((error && error.message)) || 'Oops! Something went wrong. Please try again.');
        });   
    };
    

    render() {

        return (

            <div className="signup-container">
                <div className="signup-content">
                    <h1>Add a New Job</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <input type='text' name='position'
                                className='form-control' placeholder='Job position'
                                value={this.state.position}
                                onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-item">
                            {/* <p id="profile-name-hint" className="input-hint">
                            Company Name: <samp>Amazon: 테스트할때는 숫자를 넣어주세요.</samp>. </p> */}
                            <input type="text" name=""
                                className="form-control" placeholder="300"
                                value={this.state.employerId} required />
                        </div>
                        <div className="form-item">
                            <textarea type="text" name="description"
                                style={{ resize: "none", height: "100px" }}
                                className="form-control" placeholder="Job Description"
                                value={this.state.description} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="url"
                                className="form-control" placeholder="URL - Job posting"
                                value={this.state.url} onChange={this.handleInputChange} />
                        </div>
                        {/* <div className="form-item">
                        <input type="text" name="uId"
                            className="form-control" placeholder={this.props.currentUser.id}
                            value={this.state.uId} onChange={this.handleInputChange} disabled />
                    </div> */}
                        <div className="form-item">
                            <PinkButton type="submit">Add a Job</PinkButton>
                        </div>
                    </form>
                </div>
            </div>


        )
    };
}

export default withRouter(JobCreationFormComponent);