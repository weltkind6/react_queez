import React from 'react';
import {Button} from "reactstrap";
import Title from "../../ui/TItle/Title";
import styles from './Question1.module.css'
import {Link} from "react-router-dom";
import QuestionsNum from "../../ui/QuestionsNum/QuestionsNum";

const Question1 = () => {
    return (
        <>
            <Title children="Вопрос 1"/>
            <div className={styles.container}>
                <div>
                    Есть ли у вас определенные стандарты вежливого и учтивого поведения с членами вашей семьи?
                </div>
                <div className={styles.buttonsBlock}>
                    <Link to="/question2">
                        <Button color="primary" outline>Да</Button>
                    </Link>
                    <Button color="primary" outline>Может быть</Button>
                    <Button color="primary" outline>Нет</Button>
                </div>

                <QuestionsNum children='1' />
            </div>
        </>
    );
};

export default Question1;