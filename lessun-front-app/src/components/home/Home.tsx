import React from "react";
import GetInTouch from "../shared/GetInTouch";

const Home = () => {
    return (
        <>
            {/* Header in purple theme */}
            <header id="home" className="backstretched fullheight max-600">
                <div className="dark-overlay fullheight max-600">
                    <div className="container fullheight max-600">
                        <div className="jumbotron">
                            <h1><small>We offer the</small><br />
                                        Best Education</h1>
                            <p>
                                <a className="btn btn-white btn-lg page-scroll" href="#about-us" role="button">Why?</a>
                                <a className="btn btn-lg btn-primary btn-green page-scroll" href="#our-courses" role="button">Browse Courses</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Front-Page about us section */}
            <section id="about-us">
                <div className="section-inner">
                    <div className="container">
                        <div className="row mb60 text-center">
                            <div className="col-sm-12">
                                <h3 className="section-title">About Us</h3>
                                <p className="section-sub-title">Who are we?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <p className="lead">Completely enhance an expanded array of internal or "organic" sources for prospective models.</p>
                                <p className="mb40">Assertively envisioneer business opportunities before interoperable e-markets. Quickly empower optimal core competencies and real-time imperatives. Enthusiastically predominate 24/365 benefits with collaborative web-readiness, assertively envisioneer business opportunities e-markets.</p>
                                <a className="btn btn-lg btn-primary btn-green page-scroll" href="#our-courses" role="button">Browse Courses</a>
                            </div>
                            <div className="col-md-8 col-md-offset-1">
                                <div className="row">
                                    <div className="col-sm-6 wow fadeIn mb40">
                                        <div className="icon-box-1 match-height mb30">
                                            <i className="fa-4x pe-7s-camera"></i>
                                            <div className="content-area">
                                                <h3 className="title">Web Design Training</h3>
                                                <div className="content">Enthusiastically seize bricks-and-clicks supply chains without open-source solutions. Objectively harness cross-media results for performance based.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn mb40">
                                        <div className="icon-box-1 match-height mb30">
                                            <i className="fa-4x pe-7s-piggy"></i>
                                            <div className="content-area">
                                                <h3 className="title">Finance Degree</h3>
                                                <div className="content">Goodbye gray sky hello blue. There's nothing can hold me when I hold you. Feels so right it cant be wrong. Seamlessly underwhelm enterprise-wide.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn">
                                        <div className="icon-box-1 match-height mb30">
                                            <i className="fa-4x pe-7s-joy"></i>
                                            <div className="content-area">
                                                <h3 className="title">Video Game Development</h3>
                                                <div className="content">Goodbye gray sky hello blue. There's nothing can hold me when I hold you. Feels so right it cant be wrong.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn">
                                        <div className="icon-box-1 match-height mb30">
                                            <i className="fa-4x pe-7s-micro"></i>
                                            <div className="content-area">
                                                <h3 className="title">Audio Engineering</h3>
                                                <div className="content">Goodbye gray sky hello blue. There's nothing can hold me when I hold you. Feels so right it cant be wrong.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why choose Lessun/Scholar? section */}
            <section id="band-member-1" className="hover-shift smoothie match-height" data-mh="page-splitter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-8 col-xs-12 dark-overlay fill-right smoothie match-height" data-mh="page-splitter">
                            <div className="section-inner">
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-10">
                                        <h3>Why choose Scholar?</h3>
                                        <h5 className="section-sub-title mb40">Let us explain.</h5>
                                        <p className="mb40">Holisticly orchestrate superior total linkage rather than end-to-end internal or "organic" sources. Seamlessly procrastinate client-based ROI without long-term high-impact.</p>
                                        <a href="#our-courses" className="btn btn-primary btn-green btn-lg">Browse Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses section */}
            <section id="our-courses">
                <div className="section-inner">
                    <div className="container">
                        <div className="row mb60 text-center">
                            <div className="col-sm-12">
                                <h3 className="section-title">Popular Courses</h3>
                                <p className="section-sub-title">Hurry, they fill up quickly.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col-xs-12" role="tabpanel">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                {/* Nav tabs */}
                                                <ul className="nav nav-justified image-tabs" id="course-tabs" role="tablist">
                                                    <li role="presentation" className="summer-term active">
                                                        <a href="#summer-term" aria-controls="summer-term" role="tab" data-toggle="tab" className="dark-overlay .half-opacity ">
                                                            <span>Summer Term</span>
                                                        </a>
                                                    </li>
                                                    <li role="presentation" className="winter-term">
                                                        <a href="#winter-term" aria-controls="winter-term" role="tab" data-toggle="tab" className="dark-overlay .half-opacity ">
                                                            <span>Winter Term</span>
                                                        </a>
                                                    </li>
                                                    <li role="presentation" className="online-learning">
                                                        <a href="#online-learning" aria-controls="online-learning" role="tab" data-toggle="tab" className="dark-overlay .half-opacity ">
                                                            <span>Online Learning</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                {/* Tab panes */}
                                                <div className="tab-content pt60" id="tabs-collapse">
                                                    <div role="tabpanel" className="tab-pane fade in active" id="summer-term">
                                                        <div className="tab-inner">
                                                            <div className="row">
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Photography for Beginners</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$199</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Proffesional Photography</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$499</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Photoshop Basics</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$199</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div role="tabpanel" className="tab-pane fade" id="winter-term">
                                                        <div className="tab-inner">
                                                            <div className="row">
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Photography for Beginners</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$199</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Proffesional Photography</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$499</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Photoshop Basics</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$199</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Automotive Repair</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$249</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Photography for Beginners</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$199</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Proffesional Photography</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$499</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div role="tabpanel" className="tab-pane fade" id="online-learning">
                                                        <div className="tab-inner">
                                                            <div className="row">
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Photoshop Basics</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$199</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Automotive Repair</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$249</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 mb40">
                                                                    <div className="row">
                                                                        <div className="col-sm-10 col-xs-12">
                                                                            <h5><span>Photography for Beginners</span></h5>
                                                                            <p className="lead">16 week course.</p>
                                                                            <p className="mb20">Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.</p>
                                                                            <a href="single-course.html" className="btn btn-primary btn-green">View Details</a>
                                                                        </div>
                                                                        <div className="col-sm-2 col-xs-12 text-right">
                                                                            <h1><span>$199</span></h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="panel-group styled-accordion" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading panel-open smoothie" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Summer Special</a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div className="panel-body">
                                                <p>Phosfluorescently e-enable multidisciplinary architectures without team driven services. Credibly innovate high-payoff alignments before resource sucking metrics. Uniquely repurpose granular synergy after tactical internal or "organic" sources. Conveniently fabricate go forward niches vis-a-vis top-line partnerships. Progressively brand 24/7 deliverables whereas diverse total linkage. Synergistically coordinate process-centric metrics vis-a-vis 24/7 expertise. Uniquely plagiarize enterprise models for business bandwidth. Uniquely redefine robust networks via low-risk high-yield materials. Professionally reinvent ethical benefits rather than reliable e-commerce. Globally synergize multifunctional human capital whereas customer directed manufactured products. Rapidiously deploy open-source potentialities whereas magnetic benefits. Uniquely impact best-of-breed customer service whereas.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading smoothie" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Outdoor Persuits</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading smoothie" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Autumn Event</a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                <p>Enthusiastically disseminate bleeding-edge ROI rather than accurate results. Collaboratively scale interoperable experiences for dynamic services. Appropriately embrace web-enabled potentialities rather than proactive human capital. Distinctively mesh resource-leveling e-commerce without B2B applications. Rapidiously iterate resource sucking intellectual capital vis-a-vis alternative experiences. Dramatically exploit unique communities rather than customized customer service. Energistically pursue high standards in manufactured products after top-line expertise.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading smoothie" role="tab" id="heading-four">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-four" aria-expanded="false" aria-controls="collapse-four">Ski Weekend</a>
                                            </h4>
                                        </div>
                                        <div id="collapse-four" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-four">
                                            <div className="panel-body">
                                                <p>Enthusiastically disseminate bleeding-edge ROI rather than accurate results. Collaboratively scale interoperable experiences for dynamic services. Appropriately embrace web-enabled potentialities rather than proactive human capital. Distinctively mesh resource-leveling e-commerce without B2B applications. Rapidiously iterate resource sucking intellectual capital vis-a-vis alternative experiences. Dramatically exploit unique communities rather than customized customer service. Energistically pursue high standards in manufactured products after top-line expertise.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading smoothie" role="tab" id="heading-five">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-five" aria-expanded="false" aria-controls="collapse-four">Books 4 Kidz</a>
                                            </h4>
                                        </div>
                                        <div id="collapse-five" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-five">
                                            <div className="panel-body">
                                                <p>Enthusiastically disseminate bleeding-edge ROI rather than accurate results. Collaboratively scale interoperable experiences for dynamic services. Appropriately embrace web-enabled potentialities rather than proactive human capital. Distinctively mesh resource-leveling e-commerce without B2B applications. Rapidiously iterate resource sucking intellectual capital vis-a-vis alternative experiences. Dramatically exploit unique communities rather than customized customer service. Energistically pursue high standards in manufactured products after top-line expertise.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Prestigious past section */}
            <section id="band-member-2" className="hover-shift smoothie match-height" data-mh="page-splitter">
                <div className="container match-height" data-mh="page-splitter">
                    <div className="row">
                        <div className="col-md-4 dark-overlay fill-left smoothie">
                            <div className="section-inner">
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-10">
                                        <h3>A Prestigous Past</h3>
                                        <h5 className="section-sub-title mb40">Past Memorable Student.</h5>
                                        <p>Distinctively revolutionize value-added channels for clicks-and-mortar niche markets. Rapidiously exploit out-of-the-box intellectual capital without orthogonal e-services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team section */}
            <section id="our-team">
                <div className="section-inner">
                    <div className="container">
                        <div className="row mb60 text-center">
                            <div className="col-sm-12">
                                <h3 className="section-title">Meet The Team</h3>
                                <p className="section-sub-title">The very best in their fields.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div id="music-carousel" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-1.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Richard Smith</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-2.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Dave Edwards</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-3.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Lisa Rhymes</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-4.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Steve Kane</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-1.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Richard Smith</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-2.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Dave Edwards</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-3.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Lisa Rhymes</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="hover-effect smoothie">
                                                        <a href="#" className="thumbnail smoothie">
                                                            <img src="assets/images/cover-4.jpg" alt="Image" className="smoothie" /></a>
                                                        <div className="hover-caption dark-overlay smoothie text-center">
                                                            <div className="vertical-center-js">
                                                                <h4>Steve Kane</h4>
                                                                <p className="mb20"><small>Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate.</small></p>
                                                                <a href="single-team.html" className="btn btn-primary btn-green">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a data-slide="prev" href="#music-carousel" className="left carousel-control"><i className="fa fa-long-arrow-left"></i></a>
                                    <a data-slide="next" href="#music-carousel" className="right carousel-control"><i className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student testimonials */}
            <section id="promo-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 dark-overlay col-md-offset-8 fill-right">
                            <div className="section-inner">
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-10">
                                        <h3 className="section-title">Student Testimonials</h3>
                                        <p className="section-sub-title">Pride, Passion and Performance.</p>
                                        <div className="carousel slide" data-ride="carousel" id="testimonial-carousel">
                                            <ol className="carousel-indicators">
                                                <li className="active" data-slide-to="0" data-target="#testimonial-carousel"></li>
                                                <li data-slide-to="1" data-target="#testimonial-carousel"></li>
                                                <li data-slide-to="2" data-target="#testimonial-carousel"></li>
                                            </ol>

                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <p>Appropriately underwhelm mission-critical outsourcing after best-of-breed systems. Holisticly synergize 24/7 content after plug-and-play experiences. Dynamically architect end-to-end catalysts for change rather than clicks-and-mortar growth strategies.</p><small><strong>James Smith</strong></small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <p>Appropriately underwhelm mission-critical outsourcing after best-of-breed systems. Holisticly synergize 24/7 content after plug-and-play experiences. Dynamically architect end-to-end catalysts for change rather than clicks-and-mortar growth strategies.</p><small><strong>Dave Wilkins</strong></small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <p>Appropriately underwhelm mission-critical outsourcing after best-of-breed systems. Holisticly synergize 24/7 content after plug-and-play experiences. Dynamically architect end-to-end catalysts for change rather than clicks-and-mortar growth strategies.</p><small><strong>Amy Owen</strong></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Campus news Section */}
            <section className="silver-wrapper" id="the-gallery">
                <div className="section-inner">
                    <div className="container">
                        <div className="row mb60 text-center">
                            <div className="col-sm-12">
                                <h3 className="section-title">Campus News</h3>
                                <p className="section-sub-title">A finger on the pulse of our culture.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 match-height mb40">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="hover-effect smoothie">
                                            <a href="#" className="smoothie">
                                                <img src="assets/images/blog-1.jpeg" alt="Image" className="img-responsive smoothie" />
                                            </a>
                                            <div className="hover-caption dark-overlay smoothie text-center">
                                                <div className="vertical-center-js">
                                                    <a href="single-post.html" className="btn btn-primary btn-green">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="mt0"><a href="#">Former Student wins Prestigous Prize</a></h3>
                                        <p className="mb20">Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate. Competently simplify viral platforms via goal-oriented web services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 match-height mb40">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="hover-effect smoothie">
                                            <a href="#" className="smoothie">
                                                <img src="assets/images/blog-2.jpg" alt="Image" className="img-responsive smoothie" />
                                            </a>
                                            <div className="hover-caption dark-overlay smoothie text-center">
                                                <div className="vertical-center-js">
                                                    <a href="single-post.html" className="btn btn-primary btn-green">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="mt0"><a href="#">Former Student wins Prestigous Prize</a></h3>
                                        <p className="mb20">Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate. Competently simplify viral platforms via goal-oriented web services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 match-height mb40">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="hover-effect smoothie">
                                            <a href="#" className="smoothie">
                                                <img src="assets/images/blog-3.jpg" alt="Image" className="img-responsive smoothie" />
                                            </a>
                                            <div className="hover-caption dark-overlay smoothie text-center">
                                                <div className="vertical-center-js">
                                                    <a href="single-post.html" className="btn btn-primary btn-green">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="mt0"><a href="#">Former Student wins Prestigous Prize</a></h3>
                                        <p className="mb20">Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate. Competently simplify viral platforms via goal-oriented web services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 match-height mb40">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="hover-effect smoothie">
                                            <a href="#" className="smoothie">
                                                <img src="assets/images/blog-4.jpeg" alt="Image" className="img-responsive smoothie" />
                                            </a>
                                            <div className="hover-caption dark-overlay smoothie text-center">
                                                <div className="vertical-center-js">
                                                    <a href="single-post.html" className="btn btn-primary btn-green">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="mt0"><a href="#">Former Student wins Prestigous Prize</a></h3>
                                        <p className="mb20">Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate. Competently simplify viral platforms via goal-oriented web services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 match-height">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="hover-effect smoothie">
                                            <a href="#" className="smoothie">
                                                <img src="assets/images/blog-5.jpg" alt="Image" className="img-responsive smoothie" />
                                            </a>
                                            <div className="hover-caption dark-overlay smoothie text-center">
                                                <div className="vertical-center-js">
                                                    <a href="single-post.html" className="btn btn-primary btn-green">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="mt0"><a href="#">Former Student wins Prestigous Prize</a></h3>
                                        <p className="mb20">Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate. Competently simplify viral platforms via goal-oriented web services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 match-height">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="hover-effect smoothie">
                                            <a href="#" className="smoothie">
                                                <img src="assets/images/blog-5.jpg" alt="Image" className="img-responsive smoothie" />
                                            </a>
                                            <div className="hover-caption dark-overlay smoothie text-center">
                                                <div className="vertical-center-js">
                                                    <a href="single-post.html" className="btn btn-primary btn-green">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="mt0"><a href="#">Former Student wins Prestigous Prize</a></h3>
                                        <p className="mb20">Competently simplify viral platforms via goal-oriented web services. Collaboratively disintermediate. Competently simplify viral platforms via goal-oriented web services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Sponsors section */}
            <section>
                <div className="section-inner">
                    <div className="container">
                        <div className="row mb60 text-center">
                            <div className="col-sm-12">
                                <h3 className="section-title">Our Sponsers</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-sm-offset-1">
                                <div className="row">
                                    <div className="col-md-3"><img className="img-responsive" src="assets/images/logo1.png" alt="" /></div>
                                    <div className="col-md-3"><img className="img-responsive" src="assets/images/logo2.png" alt="" /></div>
                                    <div className="col-md-3"><img className="img-responsive" src="assets/images/logo3.png" alt="" /></div>
                                    <div className="col-md-3"><img className="img-responsive" src="assets/images/logo4.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Do You want to know more? Section */}
            <GetInTouch />
        </>
    )
}

export default Home;