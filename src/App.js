import './App.css';
import {Container} from 'reactstrap';
import AllRoutes from "./AllRoutes/AllRoutes";
import React, {useEffect, useState} from 'react'
import axios from "axios";

function App() {
    const [questions, setQuestions] = useState([])
    const getQuestionsHandler = async () => {
        try {
            const apiUrl = 'https://jservice.io/api/random?count=10'
            const res = await axios.get(apiUrl).then(response => response.data)
            setQuestions(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect( () => {
        getQuestionsHandler()

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
