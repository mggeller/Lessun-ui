import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>

            <div className="preloader">
                <div className="preloader-img">
                    <span className="loading-animation animate-flicker">Lessun</span>
                </div>
            </div>

            {/* Nav Bar div element */}
            <div className="nav-wrapper smoothie">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3">
                            <NavLink to="/Home" activeClassName="active" role="button"><img alt="" className="logo img-responsive" src="assets/images/logo.png" /></NavLink>
                        </div>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="col-xs-9">
                            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                       <NavLink to="/Home" activeClassName="active" role="button">Home</NavLink>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Courses <span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink to="/Courses" activeClassName="active" role="button">Courses Filterable</NavLink></li>
                                            <li><a href="courses-tabs.html">Courses Tabs</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News <span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink to="/NewsList" activeClassName="active" role="button">News List</NavLink></li>
                                            <li><NavLink to="/Article" activeClassName="active" role="button">Single Post</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink to="/AboutUs" activeClassName="active" role="button">About Us</NavLink></li>
                                            <li><NavLink to="/ContactUs" activeClassName="active" role="button">Contact Us</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to="/Login" activeClassName="active" role="button">Log In</NavLink>
                                    </li>
                                    <li><NavLink to="/Register" activeClassName="active" role="button">Register</NavLink></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-search"></i></a>
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
        </>
    )
}

export default Header;