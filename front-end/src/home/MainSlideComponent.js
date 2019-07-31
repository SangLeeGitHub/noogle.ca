import React, { Component } from 'react';
// import './Home.css';
// import '../common/AppHeader.css';
import './MainSlideComponent.css';



import Candy from '../img/candy.png';
import Cheeze from '../img/cheeze.png';
import XManageResume from '../img/x-file-explorer.png';
import AllInOne from '../img/allinone.png';
import ManageResume from '../img/manage-resume.png';
import NoogleSite from '../img/nooglesite.png';
import Crepe from '../img/crepe.png';
import AnimatedAllInOne from '../img/all-animated.gif';
import TimeSaving from '../img/timesaving.jfif';




class MainSlideComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.currentUserId
        }
    }
    render() {
        return (
            <div >
                <div className="cover">
                    <div>
                        <h1 className="cover-title">You will get offers, SOON!
                            <span>Manage your job applications with ease.</span>
                            <span><a href="" className="btn btn-default btn-lg">Get Started</a></span>
                        </h1>
                        
                    </div>

                </div>

                <div className="padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                                <h3>Integrated Job Application Management Service</h3>
                                <div className="main-content">
                                    <p >How long does it take to find an existing resume, modify it and save it to your computer or website?</p>

                                    <p> noogle.ca supports integrated job application management service within one site.</p>
                                    <p>You can manage every application based on the Employer, job position you applied and you can check and update each status. </p>

                                </div>


                                <h3>Good Luck!</h3>
                                <div className="main-content">
                                    <p >We hope you don't need to use noogle.ca service any more.</p>
                                    <p>It means you get a wonderful job already. Nevertheless, you are welcomed if you come back when you want to move your job position again.
                                        </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src={NoogleSite} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding">
                    <div className="container">
                        <div clas="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text center" >
                                <h3>Single Site Management</h3>
                                <div className="main-content">
                                    <p >You are managing your job applications on your computer using "File Explorer", "Excel Sheets" or each job portal web sites.                               </p>
                                    <p>You are confused when you apply a new job posting whether, when you applied for or not and so on. You have to log in each job portal to check it, didn't you?</p>
                                    <p>noogle.ca web service enables you to manage your applications within single site.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <img src={AnimatedAllInOne} className="mid-image"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <h3>Save your time and Reduce the pain.</h3>
                                <div className="main-content">
                                    <p>You have a lot of job applications to manage when you try to move to another position,
                                         or  to look for a new jop.
                                         It is very painful to check and update the status of each application and to follow up, as well.</p>
                                    <p > We help you to save your precious time with noogle.ca web service.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <img src={TimeSaving} className="mid-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="padding-large">
                    <div className="fixed">

                    </div>
                </div>

{/* 

                <div className="padding">
                    <div className="container">
                        <div className="row">
                               <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                                <h3>All about using noogl.ca</h3>
                                <div className="main-content">
                                <p >Do not be bothered! You can manage your various, scattered job applications here with ease.
                                    You can integrate and manage all the applications within noogle.ca web service. </p>
                                <p >Do not leave them! Your tiny effort will give you many job offers if you are with noogle.ca!  </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                                <img className="" src={Crepe} />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )                 
    };
};

export default MainSlideComponent;