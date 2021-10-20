import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="p-2">
            <h1 className="my-4 text-center fs-40">CARE SERVICES</h1>
            <Row xs={1} md={2} className="g-4 p-4 ">
                <Col>
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1574706472779-9b257f717490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80&fbclid=IwAR1-Kr0ziAPrPnd-giKnYvVu96luKUnzOne_G5DAGmx7EsRySOKWkTLijro" />
                </Col>

                <Col>
                    <h1 className='fw-bold pt-120'>Medicare covers the cost of treatment in public hospitals</h1>
                    <p>Medicare covers the cost of treatment in public hospitals and subsidises the cost of a wide range of health services and medications. You may choose only to have Medicare cover or to have private health insurance as well. Medicare allows you to visit a bulk-billing doctor and receive free medical treatment.</p>
                </Col>


            </Row>
        </div>
    );
};

export default AboutUs;