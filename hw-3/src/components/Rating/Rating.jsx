
import { useState } from 'react';
import ratingList from './ratingList';
import buttons from './buttons';
import './Rating.css';


function Rating() {
    const [ratingValue, setRatingValue] = useState(0);

    const btns = buttons.map((item, index) => <button className='btn' onClick={() => setRatingValue(index)} key={item}>{item}</button>);

    return (
        <>
            <div className='raiting' >
                <img src={ratingList[ratingValue]} alt="ratingList" />
                <p className='btns'>{btns}</p>
            </div>
        </>

    )
};

export default Rating;