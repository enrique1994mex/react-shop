import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import 'styles/NewPassword.scss'
const NewPassword = () => {
	const form = useRef(null)
	const navigate = useNavigate()
	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			password: formData.get('password'),
			newPassword: formData.get('newPassword'),
		}
		console.log(data)
		navigate('/password-recovery')
	}
	return (
		<div className='NewPassword'>
			<div className='NewPassword-container'>
				<img src='./logos/logo_yard_sale.svg' alt='logo' className='logo' />

				<h1 className='title'>Create a new password</h1>
				<p className='subtitle'>Enter a new passwrd for yue account</p>

				<form ref={form} className='form' onSubmit={handleSubmit}>
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

					<label htmlFor='new-password' className='label'>
						Password
					</label>
					<input
						type='password'
						id='new-password'
						name='newPassword'
						placeholder='*********'
						className='input input-password'
					/>

					<input
						type='submit'
						value='Confirm'
						className='primary-button login-button'
					/>
				</form>
			</div>
		</div>
	)
}

export default NewPassword
