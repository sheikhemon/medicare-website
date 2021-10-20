import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Help.css'

const Help = () => {
    return (
        <div className="p-4">
            <Row xs={1} md={2} className="g-4 p-4 ">

                <Col>
                    <h1 className='text-primary fw-bold pt-70'>How can we Help you ?</h1>
                    <p>Social Security Administration: Call 1-800-772-1213 for help with Medicare eligibility and enrollment, Part B premiums, Part D Extra Help or Medicare Savings Programs</p>

                </Col>
                <Col>
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" />
                </Col>
            </Row>
        </div>
    );
};

export default Help;