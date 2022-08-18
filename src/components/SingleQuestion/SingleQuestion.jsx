import React, {useState} from 'react';
import {Button, Input, InputGroup} from "reactstrap";
import {Link} from "react-router-dom";
import styles from './SingleQuestion.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ADD_CORRECT_ANSWER, QUESTION_VISIBLE, SKIP_QUESTION} from "../../Redux/types";


const SingleQuestion = ({question, answer, index}) => {
    const dispatch = useDispatch()
    const [yourAnswer, setYourAnswer] = useState('')
    const isAnswerVisible = useSelector(state => state.isAnswerVisible)
    const submitAnswerHandler = () => {
        if (yourAnswer.toLowerCase() === answer.toLowerCase()) {
            dispatch({type: ADD_CORRECT_ANSWER})
        }
        setYourAnswer('')
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
        showAnswer()
    }
    const showAnswerHandler = () => {
        dispatch({type: QUESTION_VISIBLE, payload: true})
        console.log(isAnswerVisible)
    }


    return (
        <div>
            {isAnswerVisible ? <h3>{answer}</h3> : <h3>think yourself</h3>}
            <div className={styles.questionBlock}>
                <h4>{index + 1}. {question}</h4>
                <div>Answer: <h5 className={styles.answer}>{answer}</h5></div>
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
                    <Button onClick={showAnswerHandler}>Show me answer!</Button>
                    <Link to="/results">
                        <Button color="warning" style={{width: '150px'}}>Finish</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;