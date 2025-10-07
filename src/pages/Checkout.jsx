import { useContext } from 'react'
import OrderItem from 'components/OrderItem'
import { AppContext } from '../context/AppContext'
import 'styles/Checkout.scss'
const Checkout = () => {
	const {
		state: { cart },
	} = useContext(AppContext)

	const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
	const totalArticles = cart.length

	return (
		<div className='Checkout'>
			<div className='Checkout-container'>
				<h1 className='title'>My order</h1>
				<div className='Checkout-content'>
					<div className='order'>
						<p>
							<span>${totalPrice}</span>
						</p>
						<p>{totalArticles}</p>
					</div>
				</div>
				{cart.map((product, i) => (
					<OrderItem product={product} index={i} key={i} />
				))}
			</div>
		</div>
	)
}

export default Checkout
