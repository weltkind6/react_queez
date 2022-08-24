import React from 'react';
import styles from './Scores.module.css'
import {useSelector} from "react-redux";

const Scores = () => {
    const scores = useSelector(state => state.answers)
    console.log('scores', scores)

    return (
        <div className={styles.wrapper}>
            <div className={styles.scoresPoints}>
                <span className={styles.totalScore}>{scores}</span>
                <span className={styles.points}>points</span></div>
            <div>
                <div className={styles.cards}>
                    {scores === 0 || scores === 1 ? <div className={styles.item}>Very low</div> : null}
                    {scores === 2 || scores === 3 ? <div className={styles.item}>Low</div> : null}
                    {scores === 4 || scores === 5 ? <div className={styles.item}>Low</div> : null}
                    {scores === 6 || scores === 7 ? <div className={styles.item}>Middle</div> : null}
                    {scores === 8 || scores === 9 ? <div className={styles.item}>Height</div> : null}
                    {scores === 10 ? <div className={styles.item}>Very height</div> : null}
                </div>
            </div>
        </div>
    );
};

export default Scores;