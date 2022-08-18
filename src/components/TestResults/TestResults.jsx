import React from 'react';
import {Container} from "reactstrap";
import CandidateAbout from "./CandidateAbout/CandidateAbout";
import Scores from "./Scores/Scores";
import {useSelector} from "react-redux";

const TestResults = () => {
    const results = useSelector(state => state.answers)
    const progress = results + '0'
    const progressWidth = (progress + '%').toString()
    const progressStyles = {
        width: progressWidth
    }
    const skippedQuestions = useSelector(state => state.skippedQuestions)

    return (
        <>
            <Container>
                <div className="content__wrapper">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: '20px'}}>Skipped questions:</div>
                        <div style={{fontSize: '32px', margin: '0 20px'}}>{skippedQuestions}</div>
                        <div style={{fontSize: '20px'}}>Used hints:</div>
                        <div style={{fontSize: '32px', margin: '0 20px'}}>100</div>
                    </div>
                    <Scores/>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={progressStyles}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100">{progress}%
                        </div>
                    </div>
                </div>
                <div>
                    <CandidateAbout/>
                </div>
            </Container>
        </>
    );
};

export default TestResults;