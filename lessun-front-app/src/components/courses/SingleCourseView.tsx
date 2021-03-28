import React from "react";
import { NavLink } from "react-router-dom";
import { ISingleCourse } from "../../domain/ISingleCourse";
import StarRating from "./StarRating";

const SingleCourseView = (props: { course: ISingleCourse }) => {
    return (
    <div className="col-sm-6 masonry-portfolio-item design">
        <div className="mb40">
            <div className="row">
                <div className="col-sm-10 col-xs-12">
                    <h5><span>{props.course.title}</span></h5>
                    <p className="lead">{props.course.duration} week course.</p>
                    <p className="mb20">{props.course.short_description}</p>
                    <p className="course-info lead">Rating: <StarRating rating={props.course.rating}/></p>
                    <NavLink to={"/Courses/" + props.course.id} className="btn btn-primary btn-green" activeClassName="active" role="button">View Details</NavLink>
                </div>
                <div className="col-sm-2 col-xs-12 text-right">
                    <h1><span>€{props.course.price}</span></h1>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleCourseView;