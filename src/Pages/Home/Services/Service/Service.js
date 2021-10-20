import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, picture, des, price } = props.service;
    return (
        <div className="col-md-4 col-12 col-sm-12 py-2 text-center">
            <div className="card">
                <img className="img-fluid " src={picture} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6>Service Price: {price}</h6>
                    <p className="card-text">{des.slice(0, 60)}</p>

                    {/* =========Dinamic Route setup=========== */}

                    <Link to={`/purchase/${id}`} ><button className="btn-sm bg-primary text-white"><i className="fas fa-cart-plus pe-2"></i>Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;