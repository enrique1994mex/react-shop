import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import 'styles/components/Menu.scss'
const Menu = ({ setToggle }) => {
	const { logout } = useAuth()

	const onLogout = () => {
		setToggle((prevState) => !prevState)
		logout()
	}
	return (
		<div className='Menu'>
			<ul>
				<li>
					<Link to='/orders' className='title'>
						My orders
					</Link>
				</li>

				<li>
					<Link to='/account'>My account</Link>
				</li>

				<li>
					<button className='primary-button-li' onClick={onLogout}>
						Sign out
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Menu
