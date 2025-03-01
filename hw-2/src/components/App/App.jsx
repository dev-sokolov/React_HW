import './App.css'
import Greeting from '../Greeting/Greeting';
import ShoppingList from '../ShoppingList/ShoppingList';
import OrderStatus from '../OrderStatus/OrderStatus';


const goods = ['milk', 'tea', 'bread', 'cheese'];
const goodsEmpty = [];
const orderInfo = [
  {orderId: 123, status: "в пути"},
  {orderId: 222, status: "обработан"},
  {orderId: 333, status: "доставлен"},
];


function App() {
  return (
    <>
      <Greeting name="Егор"/>
      <ShoppingList items={goods}/>
      <ShoppingList items={goodsEmpty}/>
      <OrderStatus info={orderInfo}/>     
    </>
  );
}

export default App;
