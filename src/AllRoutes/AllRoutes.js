import React from 'react';
import {Route, Routes} from "react-router-dom";
import Question1 from "../components/TestQuestions/Question1/Question1";
import Question2 from "../components/TestQuestions/Question2/Question2";
import Question3 from "../components/TestQuestions/Question3/Question3";
import TestStart from "../components/TestStart/TestStart";
import PageNotFound from "../components/404/PageNotFound";
import TestComplete from "../components/TestComplete/TestComplite";
import Login from "../components/Login/Login";
import Reg from "../components/Login/Reg/Reg";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="login" element={<Login />}/>
                <Route path="registration" element={<Reg />}/>
                <Route path="/" element={<TestStart />}/>
                <Route path="question1" element={<Question1 />}/>
                <Route path="question2" element={<Question2 />}/>
                <Route path="question3" element={<Question3 />}/>
                <Route path="complete" element={<TestComplete />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </div>
    );
};

export default AllRoutes;