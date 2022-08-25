import React from 'react';
import styles from './TestStart.module.css'
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import Title from "../ui/TItle/Title";


const TestStart = () => {
    return (
        <div className={styles.wrapper}>
            <Title children="A very difficult test"/>
            <div className={styles.conditions}>
                <div>Questions count: 10</div>
                <div>Approximate execution time: 10 min</div>
            </div>
            <Link to="1">
                <Button color="primary">Start</Button>
            </Link>
        </div>
    );
};

export default TestStart;