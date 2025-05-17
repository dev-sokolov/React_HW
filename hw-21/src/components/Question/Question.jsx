
import { useSelector, useDispatch } from "react-redux";
import { selectQuestions } from "../../redux/questionnaire/questionnaire-selectors";
import { answerQuestion, submitAnswers } from "../../redux/questionnaire/questionnaire-slice";

import styles from './Questions.module.css'

const Questions = () => {
    const dispatch = useDispatch();
    const questionsList = useSelector(selectQuestions);

    const onHandleSubmit = (event) => {
        event.preventDefault();
        dispatch(submitAnswers());
    };

    const elements = questionsList.map((item) => (
        <div className={styles.text} key={item.id}>
            <h3>{item.text}</h3>
            {item.options.map((option, index) => {
                const optionId = `question-${item.id}-option-${index}`;
                return (
                    <div key={optionId}>
                        <label htmlFor={optionId}>{option}</label>
                        <input
                            type="radio"
                            id={optionId}
                            name={`question-${item.id}`}
                            value={option}

                            checked={item.userAnswer === option}

                            onChange={() =>
                                dispatch(answerQuestion({ id: item.id, userAnswer: option }))
                            }
                        />
                    </div>
                );
            })}
        </div>
    ));

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Questionnaire</h1>
                <form onSubmit={onHandleSubmit}>
                    {elements}
                    <button type="submit">Send</button>
                </form>
            </div>

        </>
    );
};

export default Questions;