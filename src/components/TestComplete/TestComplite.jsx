import React from 'react';
import Title from "../ui/TItle/Title";

const TestComplete = () => {
    return (
        <div>
            <Title children='Тест завершен'/>
            <p>Мы получили ваши ответы. В ближайшее время проверим тест. После проверки теста с вами обязательно
                свяжется рекрутер.</p>
        </div>
    );
};

export default TestComplete;