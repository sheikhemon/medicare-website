import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const About = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./Doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h2 className="p-5">Professional Doctor & Service</h2>
            <div className="row container m-auto">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default About;