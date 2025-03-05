import { useState } from 'react';
import peopleList from './peopleList';
import './List.css'


function List() {
    const [people, setPeople] = useState(peopleList);

    const delPerson = (person) => {
        setPeople(prevList => {
            const newList = prevList.filter(elem => elem !== person);
            return newList;
        })
    }

    const elements = people.map(item => {
       return <p key={item.id}>Имя: {item.name}. Возраст: {item.age} лет. <button onClick={() => {delPerson(item)}}>Удалить</button></p>
    })

    return (
        <div className='wrap-list'>
            {elements}
        </div>
    )
};

export default List;