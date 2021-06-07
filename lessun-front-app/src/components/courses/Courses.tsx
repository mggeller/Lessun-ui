import { data } from "jquery";
import React, { useEffect, useState } from "react";
import { ISearchField } from "../../domain/ISearchField";
import { ISingleCourse } from "../../domain/ISingleCourse";
import { CourseApi } from "../../services/CourseApi";
import GetInTouch from "../shared/GetInTouch";
import SingleCourseView from "./SingleCourseView";

const Courses = () => {

    const [filterField, setFilterField] = useState("");
    let [searchField, setSearchField] = useState("");
    const [sortField, setSortField] = useState("rating");
    const [courses, setCourses] = useState([] as ISingleCourse[]);
    console.log(filterField);
    console.log(sortField);

    useEffect(() => {
        const callApi = async () => {
            const data = await CourseApi.getAll();
            console.log('data', data);
            setCourses(data);
        };

        callApi();
    }, [searchField]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        if (target.type === 'text') {
            console.log(target.value)
            const tempField = target.value;
            setSearchField(tempField);
            searchField = target.value
            const searchByTitle = async () => {
                const search: ISearchField = { courseTitle: searchField }
                await CourseApi.searchByTitle(search);
            };
            searchByTitle();
        }
        console.log(searchField);
    }

    useEffect(() => {

        const sortCourses = (type: string) => {
            const types: any = {
                price: 'price',
                rating: 'rating',
                duration: 'duration'
            };
            const sortProperty: string = types[type];
            const sorted = [...courses].sort((a: any, b: any) => a[sortProperty] - b[sortProperty]);
            setCourses(sorted);
        };

        sortCourses(sortField);
    }, [sortField])


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
                            <p>
                                <a className="btn btn-lg btn-primary btn-green page-scroll" href="#our-courses" role="button">Create New Courses</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <section id="our-courses">
                <div className="section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <div className="input-group mb-3">
                                    <input value={searchField} onChange={(e) => handleChange(e.target)} type="text" className="form-control" placeholder="Search Course" aria-label="Search Course" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"></button>
                                </div>

                                <div className="masonry-portfolio row">
                                    <ul className="masonry-portfolio-filter mb40 text-center list-inline wow fadeIn" data-wow-delay="0.2s">
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("")}>All</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Music")}>Music</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Language")}>Language</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Photography")}>Photography</button></li>
                                        <li><button className="btn btn-primary btn-transparent" onClick={() => setFilterField("Math")}>Math</button></li>
                                        <li className="select">
                                            <select onChange={(e) => setSortField(e.target.value)} className="btn btn-secondary">
                                                <option value="" disabled selected>Sort By</option>
                                                <option value="price">Price</option>
                                                <option value="rating">rating</option>
                                                <option value="duration">Duration</option>
                                            </select>
                                        </li>
                                    </ul>

                                    <div className="masonry-portfolio-items">

                                        {courses.filter(course => {return course.tags.find(tag => tag.tagName === filterField || filterField === "")}).map(course => <SingleCourseView course={course} key={course.id} />)}
                                        <br />

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