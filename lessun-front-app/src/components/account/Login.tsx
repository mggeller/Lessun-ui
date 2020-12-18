import React from "react";
import { NavLink } from "react-router-dom";
import GetInTouch from "../shared/GetInTouch";

const Login = () => {
    return (
        <>
            <div className="preloader">
                <div className="preloader-img">
                    <span className="loading-animation animate-flicker"><img src="assets/images/loading.gif" alt="loading" /></span>
                </div>
            </div>

            <header id="home" className="backstretched single-page-hero">
                <div className="dark-overlay single-page-hero">
                    <div className="container single-page-hero">
                        <div className="vertical-center-js text-center">
                            <h1>Log in</h1>
                        </div>
                    </div>
                </div>
            </header>

            <section id="about-us">
                <div className="section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-1">
                                <div className="row">
                                    <div id="message" className="col-sm-12"></div>
                                    <div className="col-sm-12">
                                        <form method="post" id="contactform" className="main-contact-form">
                                            <div className="form-group">
                                                <input type="text" className="form-control col-md-4 mb20" name="email" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                                <input type="password" className="form-control col-md-4 mb20" name="password" placeholder="Your Password *" id="password" required data-validation-required-message="Please enter your password." />
                                            </div>
                                            <NavLink to="/Home" className="btn btn-primary btn-purple" activeClassName="active" role="button">Log In</NavLink>
                                            <NavLink to="/Register" className="btn btn-primary btn-purple" activeClassName="active" role="button">Register</NavLink>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTouch />
        </>
    )
}

export default Login;