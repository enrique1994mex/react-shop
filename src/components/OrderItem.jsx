import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import 'styles/components/OrderItem.scss'

const OrderItem = ({ product, index }) => {
	const { removeFromCart } = useContext(AppContext)

	const handleRemove = (item, i) => {
		removeFromCart(item, i)
	}
	return (
		<div className='OrderItem'>
			<figure>
				<img src={product.images[0]} alt={product.price} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img
				src='./icons/icon_close.png'
				alt='close'
				onClick={() => handleRemove(product, index)}
			/>
		</div>
	)
}

export default OrderItem
