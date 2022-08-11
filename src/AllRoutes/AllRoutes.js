import React from 'react';
import {Route, Routes} from "react-router-dom";
import TestStart from "../components/TestStart/TestStart";
import PageNotFound from "../components/404/PageNotFound";
import TestComplete from "../components/TestComplete/TestComplite";
import Login from "../components/Login/Login";
import Reg from "../components/Login/Reg/Reg";
import TestResults from "../components/TestResults/TestResults";
import Question from "../components/ui/Question/Question";
import {questionsData} from "../Data/Data";
import SingleQuestion from "../components/SingleQuestion/SingleQuestion";


const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="quest" element={<Question/>}/>
                <Route path="registration" element={<Reg/>}/>
                <Route path="/" element={<TestStart/>}/>
                {questionsData.map(({id, title, path, question}, index) =>
                    <Route
                        path={`${path}` + `${index + 1}`}
                        element={
                            <SingleQuestion
                                id={id}
                                title={title}
                                question={question}
                                index={index}
                                path={path}
                            />}/>)
                }
                <Route path="complete" element={<TestComplete/>}/>
                <Route path="results" element={<TestResults/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
};

export default AllRoutes;