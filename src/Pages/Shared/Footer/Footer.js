import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-md-flex align-items-center text-center footer text-white pb-2 pt-2 mt-5">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 col-12 mt-5 mb-5 ">
                    <p className="fs-2">🏥</p>
                    <h2 className="footer-logo">MEDICARE</h2>
                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5 fs-5">
                    <li className="li-style ">Home</li>
                    <li className="li-style">Care</li>
                    <li className="li-style">Service</li>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
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