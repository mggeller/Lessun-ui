import React from "react";
import { IReview } from "../../domain/IReview";

const SingleReviewView = (props: { review: IReview }) => {
    return (
        <div className="col-sm-12 mb40">
            <div className="row">
                <div className="col-sm-10 col-xs-12">
                    <h4><span>{props.review.userName}</span></h4>
                    <p className="mb20">{props.review.feedBack}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReviewView;