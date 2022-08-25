import {
    ADD_CORRECT_ANSWER,
    HINTS_COUNT,
    IS_ANSWER_BUTTON_CLICKED, IS_COUNTER_RESET, IS_COUNTER_SECONDS_RESET,
    QUESTION_VISIBLE,
    SKIP_QUESTION, TOTAL_COUNTER_SECONDS
} from "./types";

const initialState = {
    answers: 0,
    skippedQuestions: 0,
    isAnswerVisible: false,
    hintsCount: 0,
    isAnswerButtonClicked: false,
    user: '',
    minutesCounter: 0,
    secondsCounter: 0,
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_CORRECT_ANSWER:
            return {
                ...state, answers: state.answers + 1
            }
        case SKIP_QUESTION:
            return  {
                ...state, skippedQuestions: state.skippedQuestions + 1
            }
        case QUESTION_VISIBLE:
            return  {
                ...state, isAnswerVisible: payload
            }
        case HINTS_COUNT:
            return {
                ...state, hintsCount: state.hintsCount + 1
            }
        case IS_ANSWER_BUTTON_CLICKED:
            return {
                ...state, isAnswerButtonClicked: payload
            }
        case IS_COUNTER_RESET:
            return {
                ...state, timerCounter: payload
            }
        case IS_COUNTER_SECONDS_RESET:
            return {
                ...state, secondsCounter: payload
            }
        default: return state
    }
}