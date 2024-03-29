import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderItem from 'components/OrderItem'
import { AppContext } from '../context/AppContext'
import 'styles/containers/MyOrder.scss'
import iconFlechita from 'icons/flechita.svg'

const MyOrder = ({ setToggleOrders }) => {
	const {
		state: { cart },
	} = useContext(AppContext)

	const navigate = useNavigate()

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) =>
			accumulator + currentValue.price
		const sum = cart.reduce(reducer, 0)
		return sum
	}

	const onCheckout = () => {
		setToggleOrders((prevState) => !prevState)
		navigate('/checkout')
	}

	return (
		<aside className='MyOrder'>
			<div className='title-container'>
				<img src={iconFlechita} alt='arrow' />
				<p className='title'>My order</p>
			</div>
			<div className='my-order-content'>
				{cart.map((product, i) => (
					<OrderItem product={product} index={i} key={i} />
				))}
				<div className='order'>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className='primary-button' onClick={onCheckout}>
					Checkout
				</button>
			</div>
		</aside>
	)
}

export default MyOrder
