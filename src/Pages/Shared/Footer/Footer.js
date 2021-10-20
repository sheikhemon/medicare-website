import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-md-flex text-center footer text-white pb-2 pt-2 mt-5">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 col-12 mt-5 mb-5 ">
                    <h5 className="">Service</h5>
                    <li className="li-style">About Care</li>
                    <li className="li-style">Care</li>

                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5">
                    <li className="li-style ">Home</li>
                    <li className="li-style">Care</li>
                    <li className="li-style">Service</li>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Social Link</h5>
                    <div className="text-info">
                        <i className="fs-2  m-2 fab fa-facebook"></i>
                        <i className="fs-2  m-2 fab fa-twitter ms-3"></i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;