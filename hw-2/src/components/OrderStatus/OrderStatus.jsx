import './OrderStatus.css'
const OrderStatus = ({info = []}) => {
    const orders = info.map(order => <p className="order" key={order.orderId}>Заказ {order.orderId}: {order.status}</p> )
    return (
        <div>
            {orders}
        </div>
    )
}

export default OrderStatus;