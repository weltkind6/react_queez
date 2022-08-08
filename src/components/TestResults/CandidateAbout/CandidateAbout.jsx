import React from 'react';
import styles from './CandidateAbout.module.css'
import {Button} from "reactstrap";
import {MdDoneOutline} from "react-icons/md";
import {BsFillPersonFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";

const CandidateAbout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Информация о кандидате Артур Князев <strong>0</strong></div>
            <div className={styles.content}>
                <div className={styles.status}>
                    <strong>Статус</strong>: Готово (в работе)
                </div>
                <div className={styles.buttons}>
                    <Button color="success" className={styles.button}>
                        <MdDoneOutline/> Назначить собеседование
                    </Button>
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