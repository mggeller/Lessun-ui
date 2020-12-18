import React from 'react';
import GetInTouch from '../shared/GetInTouch';

const AboutUs = () => {
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
                            <h1>About Us</h1>
                        </div>
                    </div>
                </div>
            </header>

            <section id="about-us">
                <div className="section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <p className="lead mb40">Interactively visualize web-enabled markets vis-a-vis future-proof total linkage. Competently parallel task economically sound networks before effective systems. Assertively formulate premier methodologies rather than client-focused products. Energistically customize equity invested imperatives via ethical outsourcing. Competently parallel task compelling technologies through next-generation initiatives.</p>
                                <p>Energistically evisculate 2.0 strategic theme areas via extensible sources. Conveniently procrastinate client-focused models through out-of-the-box systems. Holisticly parallel task cross functional synergy rather than low-risk high-yield experiences. Conveniently myocardinate premier networks after seamless materials. Competently build technically sound applications after exceptional applications.</p>
                                <p>Competently impact multifunctional resources through cross-platform bandwidth. Globally reinvent B2C manufactured products and cross functional portals. Quickly seize cross-unit partnerships rather than premier data. Professionally evisculate value-added communities whereas reliable deliverables. Monotonectally parallel task e-business interfaces with distinctive resources.</p>
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

export default AboutUs;