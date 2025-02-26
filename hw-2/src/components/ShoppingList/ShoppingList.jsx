import './ShoppingList.css'

const ShoppingList = ({items = []}) => {
    const result = items.map((item, index) => <li key={index}>{item}</li>)

    return items.length > 0 ? <div className='list'><ul>{result}</ul></div> :"Список покупок пуст"

}

export default ShoppingList;