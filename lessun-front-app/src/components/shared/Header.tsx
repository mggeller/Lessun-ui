import React from "react";

const Header = () => {
    return (
        <div id="master-wrapper">

            <div className="preloader">
                <div className="preloader-img">
                    <span className="loading-animation animate-flicker">Lessun</span>
                </div>
            </div>

            <div className="nav-wrapper smoothie">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3">
                            <a className="logo" href="index.html"><img alt="/" className="logo img-responsive" src="assets/images/logo.png" /></a>
                        </div>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="col-xs-9">
                            <div className="collapse navbar-collapse" id="navbar-collapse-1">                                        <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="index.html" role="button">Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Courses <span className="caret"></span></a>
                                    <ul className="dropdown-menu">                                                    <li><a href="courses-filterable.html">Courses Filterable</a></li>
                                        <li><a href="courses-tabs.html">Courses Tabs</a></li>
                                        <li><a href="single-course.html">Single Course</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="news-list.html">News List</a></li>
                                        <li><a href="news-grid.html">News Grid</a></li>
                                        <li><a href="single-post.html">Single Post</a></li>
                                        <li><a href="single-post-no-sidebar.html">Single Post No Sidebar</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                    </ul>
                                </li>
                                <li><a href="log-in.html">Log In</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-search"></i></a>
                                    <ul className="dropdown-menu">
                                        <form className="form-inline">
                                            <button type="submit" className="btn btn-default pull-right"><i className="glyphicon glyphicon-search"></i></button><input type="text" className="form-control pull-left" placeholder="Search" />
                                        </form>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;