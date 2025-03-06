import { useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import 'styles/Login.scss'
import logo from 'logos/logo_shoppingY.jpg'

const Login = () => {
	const { login, user } = useAuth()
	const form = useRef(null)
	const [error, setError] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const email = formData.get('email')
		const password = formData.get('password')
		const role = 'customer'

		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			setError("Please enter a valid email address.")
			return
		}

		if (!password) {
			setError("Please enter your password.")
			return
		}

		setError('')

		try {
			await login({ email, password, role })
		} catch (error) {
			setError('Error al iniciar sesión: ' + error.message)
		}
		
	}

	if (user?.email) {
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
						placeholder='app@example.cm'
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

					{error && <p className='error-message'>{error}</p>}

					<button
						className='primary-button login-button'
						onClick={handleSubmit}
					>
						Log in
					</button>
					<Link to='/recovery-password'>Forgot my password</Link>
				</form>

				<Link to='/signup' className='link-login'>
					Sign up
				</Link>
			</div>
		</div>
	)
}

export default Login
