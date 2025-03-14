import { useState, useContext } from 'react'
import Menu from 'components/Menu'
import MyOrder from '../containers/MyOrder'
import 'styles/components/Header.scss'
import menu from 'icons/icon_menu.svg'
import logo from 'logos/logo_shoppingY.jpg'
import shoppingCart from 'icons/icon_shopping_cart.svg'
import { AppContext } from '../context/AppContext'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
	const [toggle, setToggle] = useState(false)
	const [toggleOrders, setToggleOrders] = useState(false)
	const { state } = useContext(AppContext)
	const { user } = useAuth()

	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<nav>
			<img src={menu} alt='menu' className='menu' />

			<div className='navbar-left'>
				<img src={logo} alt='nav-logo' className='nav-logo' width="70px" height="70px"/>

				<ul>
					<li>
						<a href='/'>All</a>
					</li>
					<li>
						<a href='/'>Clothes</a>
					</li>
					<li>
						<a href='/'>Electronics</a>
					</li>
					<li>
						<a href='/'>Furnitures</a>
					</li>
					<li>
						<a href='/'>Toys</a>
					</li>
					<li>
						<a href='/'>Others</a>
					</li>
				</ul>
			</div>

			<div className='navbar-right'>
				<ul>
					<li className='navbar-email' onClick={handleToggle}>
						{user?.email}
					</li>
					<li
						className='navbar-shopping-cart'
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt='shopping cart' />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu setToggle={setToggle} />}
			{toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
		</nav>
	)
}

export default Header
