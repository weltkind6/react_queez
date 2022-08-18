import React from 'react';
import styles from './CandidateAbout.module.css'
import {Button} from "reactstrap";
import {MdDoneOutline} from "react-icons/md";
import {BsFillPersonFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CandidateAbout = () => {
    const scores = useSelector(state => state.answers)
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Info about candidate Ilya Yaroslavzef.
                <strong> Total score: {scores}</strong>
            </div>
            <div className={styles.content}>
                <div className={styles.status}>
                    <strong>Статус</strong>: Готово (в работе)
                </div>
                <div className={styles.buttons}>
                    <Link to="/">
                        <Button color="success" className={styles.button}>
                            <MdDoneOutline/> Restart
                        </Button>
                    </Link>
                    <Button color="primary" className={styles.button}>
                        <BsFillPersonFill/> В резерв
                    </Button>
                    <Button color="danger" className={styles.button}>
                        <ImCross/> Отказать
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CandidateAbout;