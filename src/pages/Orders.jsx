import { useContext } from 'react'
import OrderItem from 'components/OrderItem'
import { AppContext } from '../context/AppContext'
import 'styles/Order.scss'

const Orders = () => {
	const {
		state: { cart },
	} = useContext(AppContext)
	return (
		<div className='Orders'>
			<div className='Orders-container'>
				<h1 className='title'>My orders</h1>
				<div className='Orders-content'>
					{cart.map((product, i) => (
						<OrderItem product={product} index={i} key={i} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Orders
