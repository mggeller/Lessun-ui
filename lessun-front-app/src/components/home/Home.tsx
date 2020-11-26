import React from "react";

const Home = () => {
    return (
        <>
            <header id="home" className="backstretched fullheight max-600">
                <div className="dark-overlay fullheight max-600">
                    <div className="container fullheight max-600">
                        <div className="jumbotron">
                            <h1><small>We offer the</small><br />
                                Best Education</h1>
                            <p>
                                <a className="btn btn-white btn-lg page-scroll" href="#about-us" role="button">Why?</a>
                                <a className="btn btn-lg btn-primary btn-green page-scroll" href="#our-team" role="button">Browse Courses</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home;