import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Reg.css'

const Reg = () => {

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item text-center login">
                            <Link to='/login'>
                                <div className="login">Login</div>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to='/registration'>
                                <div className="signUp">Sign Up!</div>
                            </Link>
                        </li>

                    </ul>
                    <div className="form px-4">
                        <input type="text" name="" className="form-control" placeholder="Name"/>
                        <input type="text" name="" className="form-control" placeholder="Email"/>
                        <input type="text" name="" className="form-control" placeholder="Phone"/>
                        <input type="text" name="" className="form-control" placeholder="Password"/>
                        <button className="btn btn-dark btn-block">Signup</button>
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                             aria-labelledby="pills-home-tab">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reg;



