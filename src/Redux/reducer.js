import {ADD_CORRECT_ANSWER, QUESTION_VISIBLE, SKIP_QUESTION} from "./types";

const initialState = {
    answers: 0,
    skippedQuestions: 0,
    isAnswerVisible: false,
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
        default: return state
    }
}