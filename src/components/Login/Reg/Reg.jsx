import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Reg.css'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Reg = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const registrationHandler = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

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
                        <input
                            type="email"
                            value={email}
                            name=""
                            className="form-control"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}/>
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
                            onClick={() => registrationHandler(email, pass)}
                        >Signup</button>
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



