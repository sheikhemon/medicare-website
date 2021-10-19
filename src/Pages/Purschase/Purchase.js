import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Purchase = () => {
    const { Id } = useParams()
    console.log(Id)
    const [details, setDetails] = useState([])
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('/purches.json')
            .then(res => res.json())
            .then(data => setDetails(data.purch))
    }, []);
    console.log(details)

    useEffect(() => {
        const getDetails = details.find(detail => detail.id === parseFloat(Id))
        setService(getDetails)
    }, [details])

    return (
        <div className="col-md-8 col-12 col-sm-12 py-2 text-center m-auto my-5">
            <div className="card">
                <img className="img-fluid " src={service?.picture} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{service?.name}</h4>
                    <h6> Service Price: {service?.price}</h6>
                    <p className="card-text mx-3">{service?.des}</p>
                    <Link to="/home" ><button className="btn-sm live "> Back to Punches </button></Link>

                </div>
            </div>
        </div>
    );
};


export default Purchase;