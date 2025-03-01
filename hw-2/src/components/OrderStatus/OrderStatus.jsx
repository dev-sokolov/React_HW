import './OrderStatus.css'
const OrderStatus = ({orderId, status}) => {
    return (
        <p className='order'>
            Заказ #{orderId}: {status}
        </p>
    )
}

export default OrderStatus;