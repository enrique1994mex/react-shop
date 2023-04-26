import { useContext } from 'react'
import OrderItem from 'components/OrderItem'
import { AppContext } from '../context/AppContext'
import 'styles/containers/MyOrder.scss'
import iconFlechita from 'icons/flechita.svg'
import { Link } from 'react-router-dom'

const MyOrder = () => {
	const {
		state: { cart },
	} = useContext(AppContext)

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) =>
			accumulator + currentValue.price
		const sum = cart.reduce(reducer, 0)
		return sum
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
				<Link to='/checkout' className='link-order'>
					Checkout
				</Link>
			</div>
		</aside>
	)
}

export default MyOrder
