import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'styles/CreateAccount.scss'

const CreateAccount = () => {
	const form = useRef(null)
	const navigate = useNavigate()
	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault()
		setError(null)

		const formData = new FormData(form.current)
		const name = formData.get('name')?.trim()
		const lastName = formData.get('lastName')?.trim()
		const phone = formData.get('phone')?.trim()
		const email = formData.get('email')?.trim()
		const password = formData.get('password')?.trim()
		
		// Validaciones
		if (!name || !lastName || !phone || !email || !password) {
			setError('All fields are required.')
			return
		}

		const data = {
			name,
			lastName,
			phone,
			user: { email, password },
		}

		try {
			const response = await axios.post('https://api-node-store-1fbc2f8d722f.herokuapp.com/api/v1/customers', data);
			if (response.status === 201) {
				setTimeout(() => navigate('/login'), 500) // Redirigir al login
			}
		} catch (error) {
			setError('An error occurred: ' + error.response?.request.statusText)
		} 

	}

	return (
		<div className='CreateAccount'>
			<div className='CreateAccount-container'>
				<h1 className='title'>My account</h1>

				<form ref={form} onSubmit={handleSubmit} className='form'>
					<div>
						<label htmlFor='name' className='label'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Your name'
							className='input input-name'
						/>

						<label htmlFor='lastName' className='label'>
							Last Name
						</label>
						<input 
							type='text' 
							id='lastName' 
							name='lastName' 
							placeholder='Your last name' 
							className='input input-lastName' 
						/>

						<label htmlFor='phone' className='label'>
							Phone
						</label>
						<input 
							type='text' 
							id='phone' 
							name='phone' 
							placeholder='Your phone number' 
							className='input input-phone' 
						/>

						<label htmlFor='email' className='label'>
							Email
						</label>
						<input
							type='text'
							id='email'
							name='email'
							placeholder='app@example.com'
							className='input input-email'
						/>

						<label htmlFor='password' className='label'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='*********'
							className='input input-password'
						/>
					</div>

					{error && <p className="error-message">{error}</p>}

					<input
						type='submit'
						value='Create'
						className='primary-button login-button'
					/>
				</form>
			</div>
		</div>
	)
}

export default CreateAccount
