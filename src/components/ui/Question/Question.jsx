import React, {useEffect, useState} from 'react';
import './Question.module.css'
import {questionsData} from "../../../Data/Data";
import Title from "../TItle/Title";
import QuestionsNum from "../QuestionsNum/QuestionsNum";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import axios from "axios";


const Question = () => {
    const [questions, setQuestions] = useState([])
    useEffect(async () => {
        const apiUrl = 'https://jservice.io/api/random?count=5'
        const res = await  axios.get(apiUrl).then(response => response.data)
        setQuestions(res)
    }, [])

    return (
        <div>
            {questions.map(({id, question, answer}, index) =>
                <div key={id}>
                    <Title children={`Вопрос ${index + 1}`}/>
                    <div>{index + 1}. {question}</div>
                    <h6>Answer: {answer}</h6>
                    <Link to="/complete">
                        <Button color="success" outline>Завершить тестирование</Button>
                    </Link>
                    <QuestionsNum children={index + 1} />
                </div>)
            }
        </div>
    );
};

export default Question;