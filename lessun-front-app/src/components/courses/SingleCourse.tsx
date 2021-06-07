import { event } from 'jquery';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { IReview } from '../../domain/IReview';
import { ISingleCourse } from '../../domain/ISingleCourse';
import { CourseApi } from '../../services/CourseApi';
import GetInTouch from '../shared/GetInTouch';
import SingleReviewView from './SingleReviewView';
import StarRating from './StarRating';

const SingleCourse = () => {

    let { id } = useParams<{ id: string }>();

    const [course, setCourse] = useState({} as ISingleCourse | undefined);

    const [review, setReview] = useState({ userName: "Anonymous User", feedBack: '' } as IReview);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const callApi = async () => {
            await CourseApi.putReview(review, id);
        };
        callApi();
        console.log(event.target);
        window.location.reload();
    }

    const handleChange = (target: EventTarget & HTMLTextAreaElement) => {
        console.log(target.name, target.value, target.type, target);
        if (target.type === 'textarea' && target instanceof HTMLTextAreaElement) {
            setReview({ ...review, feedBack: target.value });
        }
    }

    useEffect(() => {
        const callApi = async () => {
            const data = await CourseApi.getCourse(id);
            console.log('data', data);
            setCourse(data);
        };
        callApi();
        
    }, []);

    console.log(course)

    return (
        <>
            <div className="preloader">
                <div className="preloader-img">
                    <span className="loading-animation animate-flicker"><img src="/assets/images/loading.gif" alt="loading" /></span>
                </div>
            </div>

            <header id="home" className="backstretched single-page-hero">
                <div className="dark-overlay single-page-hero">
                    <div className="container single-page-hero">
                        <div className="vertical-center-js text-center">
                            <h1>{course?.title}</h1>
                            <p>
                                <NavLink to="/Courses" className="btn btn-lg btn-primary btn-green page-scroll" role="button">Back to Courses</NavLink>
                            </p>

                        </div>
                    </div>
                </div>
            </header>

            <section id="about-us">
                <div className="section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="frame-wrapper mb40">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/C3jA2UB-O3g" frameBorder="0" allowFullScreen></iframe>
                                </div>
                                <p className="lead">Completely enhance an expanded array of internal or "organic" sources for prospective models. Collaboratively unleash installed base strategic theme areas with accurate partnerships. Credibly disintermediate unique content through fully.</p>
                                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
                                <p>Conveniently negotiate ubiquitous "outside the box" thinking via bricks-and-clicks human capital. Compellingly aggregate cooperative leadership before one-to-one best practices. Appropriately streamline interdependent methods of empowerment and multimedia based e-business. Rapidiously enable 2.0 deliverables without quality "outside the box" thinking. Globally morph technically sound customer service vis-a-vis extensive action items.</p>
                                <p>Holisticly customize prospective leadership and virtual applications. Competently productivate reliable applications before cross functional technologies. Professionally mesh state of the art web services through seamless alignments. Rapidiously fashion B2B convergence whereas professional platforms. Proactively engineer client-based growth strategies without mission-critical growth strategies. Professionally conceptualize team building deliverables rather than distinctive partnerships. Continually initiate sticky networks after diverse supply chains. Quickly mesh interdependent technology and global materials. Quickly cultivate performance based content and exceptional results. Objectively maximize compelling communities via cross-unit scenarios.</p>
                            </div>

                            <div className="col-sm-3 col-sm-offset-1 sidebar">
                                <div className="about-author-widget widget mb40">
                                    <h4 className="widget-title mb40">About the Tutor</h4>
                                    <div className="widget-content">
                                        <img className="mb40" src={course?.picturePath} />
                                        <p><small>Quickly underwhelm robust scenarios via extensible internal or "organic" sources. Progressively streamline performance based process improvements rather than high standards in convergence. Enthusiastically.</small></p>
                                    </div>
                                </div>
                                <div className="course-fees widget mb40">
                                    <h4 className="widget-title mb40">Course Fees</h4>
                                    <div className="widget-content">
                                        <span className="course-price">€{course?.price}</span>
                                        <span className="course-info">Course Length: <strong>{course?.duration} Weeks</strong></span>
                                        <span className="course-info">Students: <strong>{course?.students}</strong></span>
                                        <span className="course-info">Rating: <StarRating rating={course!.rating} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mb40 text-center">
                        <div className="col-sm-12">
                            <h3 className="section-title">Reviews</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            {/* Tab panes */}
                            <div className="tab-content pt30" id="tabs-collapse">
                                <div role="tabpanel" className="tab-pane fade in active" id="summer-term">
                                    <div className="tab-inner">
                                        <div className="row">
                                            {course?.reviews && course?.reviews.map(review => <SingleReviewView review={review} />)}
                                        </div>

                                        <div>
                                            <form onSubmit={handleSubmit}>

                                                <textarea value={review?.feedBack} onChange={(e) => handleChange(e.target)} name="comments" className="form-control mb10" id="comments" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                                                <input className="btn btn-primary mt30 pull-left" type="submit" name="submit" value="Submit" />
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
    )
}

export default SingleCourse;