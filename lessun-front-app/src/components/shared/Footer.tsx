import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Footer section */}
            <footer>
                <div className="container">
                    <div className="row mb90">
                        <div className="col-2">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="text-widget widget">
                                    <h4 className="widget-title mb40">Location</h4>
                                    <div className="widget-content">
                                        <p>Conveniently enhance high-quality imperatives vis-a-vis team driven technologies. Intrinsicly fashion economically sound communities rather than principle-centered deliverables. Synergistically impact.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="useful-link-widget widget">
                                    <h4 className="widget-title mb40">Pages</h4>
                                    <div className="widget-content">
                                        <div className="useful-link-list">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Teachers</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Courses</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Support</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Why Scholar</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Social Media</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Site Map</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Company</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Latest Courses</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Partners</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Blog Post</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Help Topic</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i><a href="#">Policies</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="gallery-widget widget">
                                    <h4 className="widget-title mb40">Gallery</h4>
                                    <div className="widget-content">
                                        <div className="gallery-list">
                                            <a className="thumb" href="#">
                                                <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=548" />
                                            </a>
                                            <a className="thumb" href="#">
                                                <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=659" />
                                            </a>
                                            <a className="thumb" href="#">
                                                <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=974" />
                                            </a>
                                            <a className="thumb" href="#">
                                                <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image748" />
                                            </a>
                                            <a className="thumb" href="#">
                                                <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=484" />
                                            </a>
                                            <a className="thumb" href="#">
                                                <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=298" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="mailing-widget widget">
                                    <h4 className="widget-title mb40">Mailing List</h4>
                                    <div className="content-wiget">
                                        <p className="mb40">Subscribe to our newsletter for the latest updates and offers.</p>
                                        <form action="index.html">
                                            <div className="input-group">
                                                <input className="form-control form-email-widget" placeholder="Email address" type="text" /><span className="input-group-btn"><input className="btn btn-email" type="submit" value="✓" /></span>
                                            </div>
                                        </form>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 footer-social">
                            <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
                            <a className="google" href="#"><i className="fa fa-google-plus"></i></a>
                            <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                            <a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a>
                            <a className="blog" href="#"><i className="fa fa-rss"></i></a>
                            <a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a>
                        </div>
                        <div className="col-md-6 text-right">
                            <p className="copyright"><small>© 2019. Designed and Developed by <a href="http://www.distinctivethemes.com" target="_blank">Distinctive Themes</a></small></p>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" id="back-to-top"><i className="fa fa-long-arrow-up"></i></a>

        </>
    )
}

export default Footer;