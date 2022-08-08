import React from 'react';
import styles from './Results.module.css'
import Intelligence from "../Intellegence/Intelligence";

const Results = () => {
    return (
        <div className={styles.wrapper}>
            <p>70-75 баллов. Очень низкий уровень интеллекта. не подходит для руковозящих должностей, требующих
                применения умственных способностей
            </p>
            <p>80-100 баллов. Низкий уровень интеллекта. Человек с таким интеллектом с трудом оценивает ситуацию и
                принимает разумные решения. Не подходит для руководящих должностей и решения задач.
            </p>
            <p>100-120 баллов. Средний уровень интеллекта. Человек с таким интеллектом в целом может оценивать ситуации.
                Этого уровня интеллекта хватит для принятия не очень сложных решений, но такой сотрудник не рекомендован
                для руководящих должностей.
            </p>
            <p>120-140 баллов. Высокий уровень интеллекта. Человек с таким интеллектом способен хорошо оценивать
                ситуации,
                принимать решения, которые требует логического и аналитического мышления. Подходит для руководящих и
                линейных должностей.
            </p>
            <p>от 140 баллов. Очень высокий уровень интеллекта. Человек с таким интеллектом способен оценивать ситуацию,
                принимать решения, которые требует логического и аналитического мышления. Рекомендован на руководящие и
                любые другие должности.
            </p>
            <Intelligence/>
        </div>
    );
};

export default Results;