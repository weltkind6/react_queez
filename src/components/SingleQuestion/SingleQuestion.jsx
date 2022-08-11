import React from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

const SingleQuestion = ({id, title, question, index, path}) => {

    return (
        <div>
            <h2>Single question</h2>
            <h3>{title}</h3>
            <h4>{question}</h4>
            <Link to={`/question` + `${index + 2}`}>
                <Button color="info">Пропустить</Button>
            </Link>
            <Link to="/results">
                <Button color="warning">Результат</Button>
            </Link>
        </div>
    );
};

export default SingleQuestion;