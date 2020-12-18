import React from 'react';
import { NavLink } from 'react-router-dom';

const GetInTouch = () => {

    return (
        <>
            <section className="dark-wrapper green-wrapper">
                <div className="section-inner-60">
                    <div className="container">
                        <div className="row cta">
                            <div className="col-sm-9">
                                <h4>Do you want to know more? We are here to help.</h4>
                            </div>
                            <div className="col-sm-3 text-right">
                                <NavLink to="/ContactUs" className="btn btn-white btn-lg" activeClassName="active" role="button">Get In Touch</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default GetInTouch;