import React from 'react';
import Title from "../../ui/TItle/Title";
import QuestionsNum from "../../ui/QuestionsNum/QuestionsNum";
import SkipBtn from "../../ui/SkipBtn/SkipBtn";

const Question3 = () => {
    return (
        <div>
            <Title children="Вопрос 3"/>
            <h2>Вопрос 3 пока что в разработке</h2>
            <SkipBtn />
            <QuestionsNum children="3"/>
        </div>
    );
};

export default Question3;