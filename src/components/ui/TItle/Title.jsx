import styles from './Title.module.css'
import {FC, ReactNode} from 'react';
import classNames from "classnames";
import React from 'react'


interface Props {
    children?: ReactNode;
    textAlign?: 'left' | 'center' | 'right'

}

const Title: FC<Props> = ({children, textAlign = 'left'}) => {
    return (
        <div>
            <h2 className={styles.wrapper}>{children}</h2>
        </div>
    );
};


export default Title;