import { useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import 'styles/Login.scss'
import logo from '../../public/assets/logos/logo_yard_sale.svg'

const Login = () => {
	const { login, user } = useAuth()
	const form = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		}
		login(data)
	}
	if (user?.username) {
		return <Navigate to='/' />
	}
	return (
		<div className='Login'>
			<div className='Login-container'>
				<img src={logo} alt='logo' className='logo' />

				<form className='form' ref={form}>
					<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='text'
						name='email'
						placeholder='platzi@example.cm'
						className='input input-email'
					/>

					<label htmlFor='password' className='label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						placeholder='*********'
						className='input input-password'
					/>

					<button
						className='primary-button login-button'
						onClick={handleSubmit}
					>
						Log in
					</button>
					<Link to='/new-password'>Forgot my password</Link>
				</form>

				<Link to='/signup' className='link-login'>
					Sign up
				</Link>
			</div>
		</div>
	)
}

export default Login
