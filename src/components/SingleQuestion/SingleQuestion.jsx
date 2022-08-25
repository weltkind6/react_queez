import React, {useState} from 'react';
import {Button, Input, InputGroup} from "reactstrap";
import {Link} from "react-router-dom";
import styles from './SingleQuestion.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    ADD_CORRECT_ANSWER,
    HINTS_COUNT,
    IS_ANSWER_BUTTON_CLICKED,
    QUESTION_VISIBLE,
    SKIP_QUESTION
} from "../../Redux/types";
import Timer from "../Timer/Timer";
import TestResults from "../TestResults/TestResults";


const SingleQuestion = ({question, answer, index}) => {
    const dispatch = useDispatch()
    const [yourAnswer, setYourAnswer] = useState('')
    const isAnswerVisible = useSelector(state => state.isAnswerVisible)
    const buttonState = useSelector(state => state.isAnswerButtonClicked)
    const submitAnswerHandler = () => {
        if (yourAnswer.toLowerCase() === answer.toLowerCase()) {
            dispatch({type: ADD_CORRECT_ANSWER})
        }
        setYourAnswer('')
        dispatch({type: QUESTION_VISIBLE, payload: false})
        dispatch({type: IS_ANSWER_BUTTON_CLICKED, payload: false})
    }
    const showAnswer = () => {
        dispatch({type: QUESTION_VISIBLE, payload: false})
    }
    const onPressEnter = e => {
        // ?why it doesn't work
        if (e.code === 'Enter') {
            submitAnswerHandler()
        }
    }
    const skipQuestionHandler = () => {
        dispatch({type: SKIP_QUESTION})
        dispatch({type: IS_ANSWER_BUTTON_CLICKED, payload: false})
        showAnswer()
    }
    const showAnswerHandler = () => {
        dispatch({type: QUESTION_VISIBLE, payload: true})
        dispatch({type: HINTS_COUNT})
        dispatch({type: IS_ANSWER_BUTTON_CLICKED, payload: true})
    }
    const reduxMinutes = useSelector(state => state.timerCounter)
    const reduxSeconds = useSelector(state => state.secondsCounter)


    return (
        <div>
            {reduxMinutes === 0 && reduxSeconds === 0 ? <TestResults /> : (
                <div>
                    <h4>{index + 1}. {question}</h4>
                    <div>Answer: <h5>
                        {isAnswerVisible ? <h3>{answer}</h3> : <h5>Try too guess here...</h5>}
                    </h5></div>
                    <InputGroup>
                        <Input
                            onKeyDown={onPressEnter}
                            value={yourAnswer}
                            placeholder="Enter your answer"
                            onChange={e => setYourAnswer(e.target.value)}
                        />
                        {yourAnswer !== '' && <Link to={`/${index + 2}`}>
                            <Button onClick={submitAnswerHandler}>Submit</Button>
                        </Link>}
                    </InputGroup>
                    <div className={styles.buttonsBlock}>
                        <Link to={`/${index + 2}`}>
                            <Button
                                color="info"
                                onClick={skipQuestionHandler}
                                style={{width: '150px'}}>Skip
                            </Button>
                        </Link>
                        <Button
                            style={{width: '150px'}}
                            color="success"
                            onClick={() => alert(`The answer's length is: ${answer.length}`)}>
                            Get a hint
                        </Button>
                        <Button
                            style={{width: '150px', height: '38px'}}
                            onClick={showAnswerHandler}
                            disabled={buttonState}
                        >
                            Get answer!
                        </Button>
                        <Link to="/results">
                            <Button color="warning" style={{width: '150px'}}>Finish</Button>
                        </Link>
                    </div>
                    <div className={styles.timer}>
                        <Timer/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleQuestion;