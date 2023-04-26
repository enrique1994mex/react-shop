import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import 'styles/CreateAccount.scss'
const CreateAccount = () => {
	const form = useRef(null)
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
		}
		console.log(data)
		navigate('/send-email')
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

						<label htmlFor='email' className='label'>
							Email
						</label>
						<input
							type='text'
							id='email'
							name='email'
							placeholder='platzi@example.com'
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
