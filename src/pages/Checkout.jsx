import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderItem from 'components/OrderItem'
import { AppContext } from '../context/AppContext'
import 'styles/Checkout.scss'
const Checkout = () => {
	const {
		state: { cart },
		setState,
	} = useContext(AppContext)

	const navigate = useNavigate()

	const [isPaying, setIsPaying] = useState(false);

	const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
	const totalArticles = cart.length

	const handlePayment = () => {
    setIsPaying(true)

    // Simular pago 
    setTimeout(() => {
      alert('Pago exitoso!')
			navigate('/') 
      setState(prev => ({ ...prev, cart: [] })) // vaciar carrito
      setIsPaying(false)
    }, 2000)
  }

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
				<div className='Checkout-actions'>
            <button className='btn-back' onClick={() => window.history.back()}>
              Regresar
            </button>

            <button
              className='btn-pay'
              onClick={handlePayment}
              disabled={isPaying || cart.length === 0}
            >
              {isPaying ? 'Procesando...' : 'Pagar con PayPal'}
            </button>
          </div>
			</div>
		</div>
	)
}

export default Checkout
