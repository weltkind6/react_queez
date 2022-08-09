import React from 'react';
import {Container} from "reactstrap";
import PersonAbout from "./PersonAbout/PersonAbout";
import Scores from "./Scores/Scores";
import Results from "./Results/Results";
import CandidateAbout from "./CandidateAbout/CandidateAbout";

const TestResults = () => {
    return (
        <>
            <Container>
                <div className="content__wrapper">
                    <PersonAbout />
                    <Scores />
                    <Results />
                </div>
                <div>
                    <CandidateAbout />
                </div>
            </Container>
        </>
    );
};

export default TestResults;