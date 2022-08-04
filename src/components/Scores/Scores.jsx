import React from 'react';
import styles from './PersonAbout.module.css'

const PersonAbout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.person}>
                <div className={styles.name}>Артур Князев</div>
                <div className={styles.age}>возраст: 31 год</div>
                <span>мужчина</span>
                <span>Пропущеные вопросы: 0</span>
            </div>
        </div>
    );
};

export default PersonAbout;