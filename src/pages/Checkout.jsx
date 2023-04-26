import { useContext } from 'react'
import OrderItem from 'components/OrderItem'
import { AppContext } from '../context/AppContext'
import 'styles/Checkout.scss'
const Checkout = () => {
	const {
		state: { cart },
	} = useContext(AppContext)
	return (
		<div className='Checkout'>
			<div className='Checkout-container'>
				<h1 className='title'>My order</h1>
				<div className='Checkout-content'>
					<div className='order'>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
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
