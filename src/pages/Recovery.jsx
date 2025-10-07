import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'styles/NewPassword.scss'
import logo from 'logos/logo_shoppingY.jpg'

const Recovery = () => {
	const form = useRef(null)
	const navigate = useNavigate()
	const [error, setError] = useState(null)

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const email = formData.get('email')

		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			setError("Please enter a valid email address.")
			return
		}

		try {
			const response = await axios.post(`${process.env.API_URL}/auth/recovery`, {
				email
			}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})

			// Si la respuesta es exitosa, redirijir al usuario a la página de SendEmail
			if (response.status === 200) {
				setError(null)
				setTimeout(() => {
					navigate('/send-email')
				}, 500)
			} else {
				setError('Failed to send recovery email. Please try again.')
			}
		} catch (error) {
			setError('An error occurred: ' + error.response?.request.statusText)
		}

	}

	return (
		<div className='NewPassword'>
			<div className='NewPassword-container'>
				<img src={logo} alt='logo' className='logo' />

				<h1 className='title'>Password recovery</h1>
				<p className='subtitle'>Enter a email for recovery password</p>

				<form ref={form} className='form' onSubmit={handleSubmit}>
				<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='text'
						name='email'
						placeholder='app@example.cm'
						className='input input-email'
					/>
					{error && <p className='error-message'>{error}</p>}
					<input
						type='submit'
						value='Submit'
						className='primary-button login-button'
					/>
				</form>
			</div>
		</div>
	)
}

export default Recovery
