import React from 'react';

const Support = () => {
    return (
        <div className="my-5 mx-5">
            <h1>Fill up the form and wait for the Doctors Response</h1>
            <div className="w-50 m-auto">
                <div className="text-start mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label ">Patient Name </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3 text-start">
                    <label for="exampleInputEmail1" className="form-label ">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="text-start mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label "> Illness </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3 text-start">
                    <label for="exampleFormControlTextarea1" className="form-label">Description of the disease</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3 text-start">
                    <label for="exampleFormControlTextarea1" className="form-label">Report FIle</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>

                <div className="mb-3 form-check text-start">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default Support;