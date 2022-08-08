import React from 'react';
import styles from './PersonAbout.module.css'

const PersonAbout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.person}>
                <h3 className={styles.name}>Артур Князев</h3>
                <div className={styles.personBlock}>
                    <div><span>возраст: 31 год</span> | <span>мужчина</span></div>
                    <span className={styles.separator}>|</span>
                    <div>Пропущеные вопросы:
                        <span>
                            <strong> 0</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonAbout;