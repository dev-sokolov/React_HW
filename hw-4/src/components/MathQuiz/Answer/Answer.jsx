import { useState } from 'react';
import style from './Answer.module.css';

const Answer = ({updatePoints}) => {

    const [answer, setAnswer] = useState('');

    const handleAnswer = (event) => { 
        setAnswer(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePoints(answer);
        setAnswer('');    
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleAnswer} value={answer} name="answer_input" type="number" placeholder='Введите ответ'/>
                <button type='submit'>Проверить</button>
            </form>
        </div>    
    )
}

export default Answer;






