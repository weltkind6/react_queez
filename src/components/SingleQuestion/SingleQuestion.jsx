import React, {useState} from 'react';
import {Button, Input, InputGroup} from "reactstrap";
import {Link} from "react-router-dom";

const SingleQuestion = ({question, answer, index}) => {

    const [yourAnswer, setYourAnswer] = useState('')
    const [correctAnswers, setCorrectAnswer] = useState(0)
    const submitAnswerHandler = () => {
        if(yourAnswer === answer) {
            setCorrectAnswer(correctAnswers + 1)
        }
    }

    return (
        <div>
            <h4>{index + 1}. {question}</h4>
            <div>Answer: <h5>{answer}</h5></div>
            <InputGroup>
                <Input placeholder="Enter your answer" onChange={e => setYourAnswer(e.target.value)}/>
                <Link to={`/${index + 2}`}>
                    <Button onClick={submitAnswerHandler}>Submit</Button>
                </Link>
            </InputGroup>
            <div>
                <h5>Correct answers <strong>{correctAnswers}</strong></h5>
            </div>
            <Link to={`/${index + 2}`}>
                <Button color="info">Skip</Button>
            </Link>
            <Link to="/results">
                <Button color="warning">Show result</Button>
            </Link>
        </div>
    );
};

export default SingleQuestion;