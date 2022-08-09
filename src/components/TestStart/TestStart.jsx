import React from 'react';
import styles from './TestStart.module.css'
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import Title from "../ui/TItle/Title";


const TestStart = () => {
    return (
        <div className={styles.wrapper}>
            <Title children="Личностный тест"/>
            <p> Этот тест спроверит ваши личностыне качества. В нём могут встретиться противоречивые вопросы, отвечайте
                так,
                как считаете нужным. Ответы на вопросы не сохраняются, мы сохраним только выводы.</p>
            <div className={styles.conditions}>
                <div>Количество вопросов: 200</div>
                <div>Примерное время выполнения: 30 минут</div>
                <div>Ограничение на выполнение: 60 минут</div>
            </div>
            <Link to="question1">
                <Button color="primary">Старт</Button>
            </Link>
        </div>
    );
};

export default TestStart;