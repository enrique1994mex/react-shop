import { useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import 'styles/NewPassword.scss'
import logo from 'logos/logo_shoppingY.jpg'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const NewPassword = () => {
	const form = useRef(null)
	const navigate = useNavigate()
	const query = useQuery();
  const [token, setToken] = useState('');
	const [error, setError] = useState(null)
	
	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			password: formData.get('password'),
			newPassword: formData.get('newPassword'),
		}
		
		if (!data.password || !data.newPassword) {
			setError('Both fields are required')
			return
		}

		if (data.password !== data.newPassword) {
			setError('Passwords do not match')
			return
		}

		try {
			const response = await axios.post(`${process.env.API_URL}/auth/change-password`, {
				token, 
				newPassword: data.password
			})
			if (response.status === 200) {
				setTimeout(() => navigate('/login'), 500) // Redirigir al login
			}
		} catch (error) {
			setError('An error occurred: ' + error.response?.request.statusText)
		}
	}

	useEffect(() => {
    const tokenFromUrl = query.get('token'); 
    setToken(tokenFromUrl);
  }, []);

	return (
		<div className='NewPassword'>
			<div className='NewPassword-container'>
				<img src={logo} alt='logo' className='logo' />

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
					{error && <p className="error-message">{error}</p>}
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
