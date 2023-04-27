import { useNavigate } from 'react-router-dom'
import 'styles/RecoveryPassword.scss'
import iconEmail from 'icons/email.svg'

const RecoveryPassword = () => {
	const navigate = useNavigate()

	const onLogin = () => {
		navigate('/login')
	}
	return (
		<div className='login'>
			<div className='form-container'>
				<img src='./logos/logo_yard_sale.svg' alt='logo' className='logo' />

				<h1 className='title'>Email has been sent!</h1>
				<p className='subtitle'>
					Please check your inbox for instructions on how to reset the password
				</p>

				<div className='email-image'>
					<img src={iconEmail} alt='email' />
				</div>

				<button className='primary-button login-button' onClick={onLogin}>
					Login
				</button>

				<p className='resend'>
					<span>Didn receive the email?</span>
					<a href='/'>Resend</a>
				</p>
			</div>
		</div>
	)
}

export default RecoveryPassword
