import React from 'react';
import styles from './Scores.module.css'
import {IoTriangle} from "react-icons/io5";

const Scores = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.scoresPoints}>
                <span className={styles.totalScore}>133</span>
                <span className={styles.points}>балла</span></div>
            <div className={styles.scoreBlock}>
                <IoTriangle className={styles.triangle} color="#26f596"/>
                <div className={styles.cards}>
                    <div className={styles.item}>очень низкий</div>
                    <div className={styles.item}>низкий</div>
                    <div className={styles.item}>средний</div>
                    <div className={styles.item}>высокий</div>
                    <div className={styles.item}>очень высокий</div>
                </div>
                <div className={styles.indicators}>
                    <span>min</span>
                    <span>85</span>
                    <span>100</span>
                    <span>120</span>
                    <span>140</span>
                    <span>max</span>
                </div>
            </div>
        </div>
    );
};

export default Scores;