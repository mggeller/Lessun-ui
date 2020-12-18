import React from 'react';
import GetInTouch from '../shared/GetInTouch';

const Article = () => {
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
                            <h1>An Example Single Post</h1>
                            <div className="item-metas text-muted mb30 white section-sub-title">
                                <span className="meta-item"><i className="pe-icon pe-7s-folder"></i> Posted In <span className="secondary-font">News</span></span>
                                <span className="meta-item"><i className="pe-icon pe-7s-ticket"></i> Tagged <span className="secondary-font">Photography</span></span>
                                <span className="meta-item"><i className="pe-icon pe-7s-user"></i> Author <span className="secondary-font">Danny Jones</span></span>
                                <span className="meta-item"><i className="pe-icon pe-7s-comment"></i> Comments <span className="secondary-font">3</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="about-us">
                <div className="section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <p className="lead">Completely enhance an expanded array of internal or "organic" sources for prospective models. Collaboratively unleash installed base strategic theme areas with accurate partnerships. Credibly disintermediate unique content through fully.</p>
                                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
                                <p>Conveniently negotiate ubiquitous "outside the box" thinking via bricks-and-clicks human capital. Compellingly aggregate cooperative leadership before one-to-one best practices. Appropriately streamline interdependent methods of empowerment and multimedia based e-business. Rapidiously enable 2.0 deliverables without quality "outside the box" thinking. Globally morph technically sound customer service vis-a-vis extensive action items.</p>
                                <p>Holisticly customize prospective leadership and virtual applications. Competently productivate reliable applications before cross functional technologies. Professionally mesh state of the art web services through seamless alignments. Rapidiously fashion B2B convergence whereas professional platforms. Proactively engineer client-based growth strategies without mission-critical growth strategies. Professionally conceptualize team building deliverables rather than distinctive partnerships. Continually initiate sticky networks after diverse supply chains. Quickly mesh interdependent technology and global materials. Quickly cultivate performance based content and exceptional results. Objectively maximize compelling communities via cross-unit scenarios.</p>

                                <div className="mb90 clearfix"></div>

                                <div id="comments-list" className="wow fadeIn" data-wow-delay="0.2s">
                                    <div className="mt60 mb50 single-section-title">
                                        <h3>3 Comments</h3>
                                    </div>
                                    <div className="media">
                                        <div className="pull-left">
                                            <img className="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/9" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <div className="well">
                                                <div className="media-heading">
                                                    <span className="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                                                </div>
                                                <p>Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.</p>
                                                <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                            </div>
                                            <div className="media">
                                                <div className="pull-left">
                                                    <img className="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/5" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="well">
                                                        <div className="media-heading">
                                                            <span className="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                                                        </div>
                                                        <p>Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do.</p>
                                                        <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="pull-left">
                                            <img className="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/6" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <div className="well">
                                                <div className="media-heading">
                                                    <span className="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                                                </div>
                                                <p>Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted.</p>
                                                <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="comments-form" className="row wow fadeIn" data-wow-delay="0.2s">
                                        <div className="col-md-12">
                                            <div className="mt60 mb50 single-section-title">
                                                <h3>Leave A Reply</h3>
                                            </div>
                                            <div id="message"></div>
                                            <form method="post" id="commentform" className="comment-form">
                                                <input type="text" className="form-control col-md-4 mb20" name="name" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                                                <input type="text" className="form-control col-md-4 mb20" name="email" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                                <input type="text" className="form-control col-md-4 mb20" name="website" placeholder="Your URL *" id="website" required data-validation-required-message="Please enter your web address." />
                                                <textarea name="comments" className="form-control mb40" id="comments" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                                                <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTouch />
        </>
    );
}

export default Article;