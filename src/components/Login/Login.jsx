import React, {useState} from 'react';
import './Login.css'
import {Link} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Tabs = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const loginHandler = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }


    return (
        <div className="d-flex justify-content-center align-items-center mt-5 ">
            <div className="card">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item text-center secondItem">
                      <div className="login">Login</div>
                    </li>
                    <li className="nav-item text-center signUp">
                       <Link to='/registration'>Sign Up!</Link>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                        <div className="form px-4 pt-5">
                            <input
                                type="email"
                                value={email}
                                name=""
                                className="form-control"
                                placeholder="Email or Phone"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                value={pass}
                                name=""
                                className="form-control"
                                placeholder="Password"
                                onChange={e => setPass(e.target.value)}
                            />
                            <button
                                className="btn btn-dark btn-block"
                                onClick={() => loginHandler(email, pass)}
                            >Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;