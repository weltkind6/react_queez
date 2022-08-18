import React from 'react';
import styles from './Scores.module.css'
import {useSelector} from "react-redux";

const Scores = () => {
    const scores = useSelector(state => state.answers)

    return (
        <div className={styles.wrapper}>
            <div className={styles.scoresPoints}>
                <span className={styles.totalScore}>{scores}</span>
                <span className={styles.points}>points</span></div>
            <div>
                <div className={styles.cards}>
                    <div className={styles.item}>очень низкий</div>
                    <div className={styles.item}>низкий</div>
                    <div className={styles.item}>средний</div>
                    <div className={styles.item}>высокий</div>
                    <div className={styles.item}>очень высокий</div>
                </div>
                <div className={styles.indicators}>
                    <span>min</span>
                    <span>3</span>
                    <span>5</span>
                    <span>7</span>
                    <span>9</span>
                    <span>max</span>
                </div>
            </div>
        </div>
    );
};

export default Scores;