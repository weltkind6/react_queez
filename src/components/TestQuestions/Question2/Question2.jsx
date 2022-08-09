import React from 'react';
import {Button} from "reactstrap";
import Title from "../../ui/TItle/Title";
import QuestionsNum from "../../ui/QuestionsNum/QuestionsNum";
import {Link} from "react-router-dom";
import SkipBtn from "../../ui/SkipBtn/SkipBtn";
import styles from './Question2.module.css'

const Question2 = () => {
    return (
        <>
            <div className={styles.container}>
                <Title children="Вопрос 2"/>
                <div>
                    Если 2 порции мороженного стоят восемь долларов, то сколько порций вы смогли бы купить на 80
                    долларов?
                </div>
                <div className={styles.buttonsBlock}>

                    <Link to='/question3'>
                            <Button color="primary" outline className={styles.button}>160</Button>
                    </Link>
                    <Link to='/question3'>
                        <Button color="primary" outline className={styles.button}>16</Button>
                    </Link>
                    <Link to='/question3'>
                        <Button color="primary" outline className={styles.button}>20</Button>
                    </Link>
                    <Link to='/question3'>
                        <Button color="primary" outline className={styles.button}>64</Button>
                    </Link>
                    <Link to='/question3'>
                        <Button color="primary" outline className={styles.button}>6</Button>
                    </Link>
                    <Link to="/question3">
                        <SkipBtn/>
                    </Link>
                </div>
                <QuestionsNum children='2'/>
                <Link to="/complete">
                    <Button color="success" outline>Завершить тестирование</Button>
                </Link>
            </div>
        </>
    );
};

export default Question2;