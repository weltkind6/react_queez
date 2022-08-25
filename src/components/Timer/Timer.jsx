import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IS_COUNTER_RESET, IS_COUNTER_SECONDS_RESET, TOTAL_COUNTER_SECONDS} from "../../Redux/types";

const Timer = () => {
    const [counter, setCounter] = useState(600);
    const minutes = Math.floor(counter / 60)
    const seconds = counter - (minutes * 60)

    const dispatch = useDispatch()

    dispatch({type: IS_COUNTER_RESET, payload: minutes})
    dispatch({type: IS_COUNTER_SECONDS_RESET, payload: seconds})

    useEffect(() => {
        const timer = counter > 0 &&
            setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    return (
        <div>
            <div>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</div>
        </div>
    );
};

export default Timer;