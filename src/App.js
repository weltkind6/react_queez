import './App.css';
import {Container} from 'reactstrap';
import AllRoutes from "./AllRoutes/AllRoutes";
import React, {useEffect, useState} from 'react'
import axios from "axios";

function App() {
    const [questions, setQuestions] = useState([])
    useEffect(async () => {
        const apiUrl = 'https://jservice.io/api/random?count=5'
        const res = await  axios.get(apiUrl).then(response => response.data)
        setQuestions(res)
    }, [])
    return (
        <div className='wrapper'>
            <Container>
                <AllRoutes questions={questions}/>
            </Container>
        </div>
    );
}

export default App;
