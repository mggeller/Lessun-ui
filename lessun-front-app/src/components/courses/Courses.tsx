import React, { useEffect, useState } from "react";
import { ISingleCourse } from "../../domain/ISingleCourse";
import { CourseApi } from "../../services/CourseApi";
import GetInTouch from "../shared/GetInTouch";
import SingleCourseView from "./SingleCourseView";

const Courses = () => {

    const [filterField, setFilterField] = useState("");
    const [courses, setCourses] = useState([] as ISingleCourse[]);
    console.log(filterField);

    useEffect(() => {
        const callApi = () => {
            const data = CourseApi.getAll();
            setCourses(data);
        };
        callApi();
    }, [courses.length]);


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
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("")}>All</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Music")}>Music</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Language")}>Language</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Photography")}>Photography</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Math")}>Math</button></li>
                                    </ul>

                                    <div className="masonry-portfolio-items">

                                        {courses.filter(course => course.tag === filterField || filterField === "").map(course => <SingleCourseView course={course} key={course.id} />)}
                                        <br/>

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

export default Courses;