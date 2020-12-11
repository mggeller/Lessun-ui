import React from 'react';

const CoursesList = () => {
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
                            <h1>Browse Our Courses</h1>
                            <p className="section-sub-title">Hurry, they fill up quickly.</p>
                        </div>
                    </div>
                </div>
            </header>

            <section id="our-courses">
                <div className="section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="masonry-portfolio row">
                                    <ul className="masonry-portfolio-filter mb40 text-center list-inline wow fadeIn" data-wow-delay="0.2s">
                                        <li><a className="btn btn-primary btn-transparent active" href="#" data-filter="*">All</a></li>
                                        <li><a className="btn btn-primary btn-transparent" href="#" data-filter=".apps">Apps</a></li>
                                        <li><a className="btn btn-primary btn-transparent" href="#" data-filter=".design">Design</a></li>
                                        <li><a className="btn btn-primary btn-transparent" href="#" data-filter=".photography">Photography</a></li>
                                        <li><a className="btn btn-primary btn-transparent" href="#" data-filter=".video">Video</a></li>
                                    </ul>

                                    <div className="masonry-portfolio-items">
                                        <div className="col-sm-6 masonry-portfolio-item apps">
                                            <div className="mb40">
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
                                        <div className="col-sm-6 masonry-portfolio-item design">
                                            <div className="mb40">
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
                                        <div className="col-sm-6 masonry-portfolio-item photography">
                                            <div className="mb40">
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
                                        <div className="col-sm-6 masonry-portfolio-item apps">
                                            <div className="mb40">
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
                                        <div className="col-sm-6 masonry-portfolio-item design">
                                            <div className="mb40">
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
            </section>

            <section className="dark-wrapper green-wrapper">
                <div className="section-inner-60">
                    <div className="container">
                        <div className="row cta">
                            <div className="col-sm-9">
                                <h4>Do you want to know more? We are here to help.</h4>
                            </div>
                            <div className="col-sm-3 text-right">
                                <a href="#" className="btn btn-white btn-lg">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoursesList;