import Answer from './Answer/Answer';
import { useState } from 'react';
import style from './MathQuiz.module.css';

const MathQuiz = () => {
    const [currentScore, setCurrentScore] = useState(0)

    const [a, setA] = useState(Math.floor(Math.random() * 10));
    const [b, setB] = useState(Math.floor(Math.random() * 10));

    const updateTask = () => {
        setA(Math.floor(Math.random() * 10));
        setB(Math.floor(Math.random() * 10));
    }

    const updatePoints = (answer) => {
        if (Number(answer) === a + b) {
            setCurrentScore(prev => prev + 1)
        } else {
            console.log("incorrect");
        }
        updateTask()
    }

    return (
        <div className={style.wrapper}>
            <div className={style.quiz}>
                <div className={style.title}>Ваши очки: {currentScore}</div>
                <div className={style.data}>{a} + {b} = ?</div>
                <Answer updatePoints={updatePoints} />
            </div>
        </div>
    )
}

export default MathQuiz;