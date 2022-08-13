import React from 'react';
import {Link} from "react-router-dom";
import {Button, Container} from "reactstrap";
import styles from './PageNotFound.module.css'
import {AiOutlineArrowLeft} from "react-icons/ai";



const PageNotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link to="/" style={{marginBottom: '14px'}}>
                    <Button color="success"> <AiOutlineArrowLeft /> Вернуться</Button>
                </Link>
                <img className={styles.img}
                     src="https://raw.githubusercontent.com/httpcats/http.cat/master/public/images-original/404.jpg"
                     alt="404 not found"
                />
            </div>
        </div>
    );
};

export default PageNotFound;