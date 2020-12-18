import React from 'react';
import GetInTouch from '../shared/GetInTouch';

const ContactUs = () => {
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
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </header>

            <section id="about-us">
                <div className="section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <p>Competently develop client-focused customer service whereas team driven leadership skills. Monotonectally synergize out-of-the-box platforms after next-generation web services. Phosfluorescently reintermediate state of the art methods of empowerment whereas excellent architectures. Professionally expedite distributed best practices after orthogonal human capital. Competently predominate resource-leveling materials via end-to-end ideas.</p>
                            </div>
                            <div className="col-sm-8 col-sm-offset-1">
                                <div className="row">
                                    <div id="message" className="col-sm-12"></div>
                                    <div className="col-sm-12">
                                        <form method="post" action="sendemail.php" id="contactform" className="main-contact-form">
                                            <div className="form-group">
                                                <input type="text" className="form-control col-md-4 mb20" name="name" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                                                <input type="text" className="form-control col-md-4 mb20" name="email" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                                <input type="text" className="form-control col-md-4 mb20" name="website" placeholder="Your URL *" id="website" required data-validation-required-message="Please enter your web address." />
                                            </div>
                                            <textarea name="comments" className="form-control mb20" id="comments" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                                            <input className="btn btn-primary mt30 pull-right" type="submit" name="submit" value="Submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id="mapwrapper"></div>
            </section>

            <GetInTouch />
        </>
    )
}

export default ContactUs;