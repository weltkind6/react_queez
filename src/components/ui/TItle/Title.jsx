import React from 'react';
import classNames from "classnames";
import styles from './Title.module.css'

const Title = ({children}) => {
    return (
        <div>
            <h2 className={classNames(styles.title)}>
                {children}
            </h2>
        </div>
    );
};

export default Title;