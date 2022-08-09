import React from 'react';
import styles from './QuestionsNum.module.css'

const QuestionsNum = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.questionsNum}>{children} из 200</div>
        </div>
    );
};

export default QuestionsNum;