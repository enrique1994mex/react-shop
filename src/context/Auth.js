import { useState, createContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	const [user, setUser] = useState(null)

	const login = async ({ email, password, role }) => {
		try {
			const response = await axios.post('https://api-node-store-1fbc2f8d722f.herokuapp.com/api/v1/auth/login', {
				email,
				password,
				role
			}, {
				headers: {
					'Content-Type': 'application/json',
				}})
			if (response.status === 200) {
				const { token } = response.data
				setUser({ email })
				localStorage.setItem('token', token) 
				navigate('/')
			} else {
				throw new Error(response.message)
			}
		} catch (error) {
			throw new Error(error.response?.request.statusText)
		}
	}

	const logout = () => {
		setUser(null)
		localStorage.removeItem('token')
		navigate('/login')
	}

	// useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	if (token) {
	// 		// Validar token con la API
	// 		axios.get('/api/auth/validate-token', { headers: { Authorization: `Bearer ${token}` } })
	// 			.then(response => {
	// 				setUser({ email: response.data.username }) // Si el token es válido, guardamos el usuario
	// 			})
	// 			.catch(() => {
	// 				// Si el token no es válido, eliminamos el token y el usuario del estado
	// 				localStorage.removeItem('token')
	// 				setUser(null)
	// 			})
	// 	}
	// }, [])

	const auth = { user, login, logout }
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const AuthRoute = (props) => {
	const { user } = useAuth()
	if (!user) {
		return <Navigate to='/login' />
	}
	return props.children
}

export { AuthProvider, AuthContext, AuthRoute }
