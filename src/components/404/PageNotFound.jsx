import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const PageNotFound = () => {
    return (
        <div>
            <h1>Страница не найдена... 404</h1>
            <Link to="/">
                <Button color="success" outline>Вернуться</Button>
            </Link>
        </div>
    );
};

export default PageNotFound;