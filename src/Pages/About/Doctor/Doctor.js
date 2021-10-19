import React from 'react';

const Doctor = (props) => {
    const { name, picture, description } = props.doctor;
    return (
        <div className="col-md-4 col-12 col-sm-12 py-2">
            <div class="card">
                <img className="img-fluid imgStayle" src={picture} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;