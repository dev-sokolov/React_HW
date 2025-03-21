import { useState, useEffect } from 'react';

import style from './ListItems.module.css'

const ListItems = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('')

    const addItem = (event) => {
        event.preventDefault();
        setItems(prevTtem => [...prevTtem, inputValue]);
        setInputValue('');
    }

    useEffect(() => {
        console.log('компонент обновлен')
    }, [])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const elements = items.map((item, index) => <li key={index}>{item}</li>)

    return (
        <>
            <div className={style.wrap}>
                <div>
                    <form onSubmit={addItem}>
                        <input value={inputValue} onChange={handleChange} name='text' id='text' type="text"  placeholder='Введите значение'/>
                        <button>Добавить</button>
                    </form>
                </div>
                <div className={style.list}>
                    <ul>{elements}</ul>
                </div>
            </div>
        </>
    )
}

export default ListItems;