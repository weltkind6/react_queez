import React from 'react';
import {Button} from "reactstrap";
import Title from "../ui/TItle/Title";
import styles from '../TestQuestions/Question1.module.css'

const Question2 = () => {
    return (
        <>
            <Title children="Вопрос 2"/>
            <div className={styles.container}>
                <div>
                    Если 2 порции мороженного стоят восемь долларов, то сколько порций вы смогли бы купить на 80
                    долларов?
                </div>
                <div className={styles.buttonsBlock}>
                    <Button color="primary" outline>160</Button>
                    <Button color="primary" outline>16</Button>
                    <Button color="primary" outline>20</Button>
                    <Button color="primary" outline>64</Button>
                    <Button color="primary" outline>6</Button>
                    <Button color="primary" outline>Пропустить</Button>
                </div>
                <div>2 из 200</div>
                <Button color="primary" outline>Завершить тестирование</Button>
            </div>
        </>
    );
};

export default Question2;