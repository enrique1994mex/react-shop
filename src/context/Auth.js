import { useState, createContext, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	const [user, setUser] = useState(null)

	const login = ({ username, password }) => {
		setUser({ username, password })
		localStorage.setItem('user', JSON.stringify({ username, password }))
		navigate('/')
	}

	const logout = () => {
		setUser(null)
		localStorage.setItem('user', null)
		localStorage.removeItem('user')
		navigate('/login')
	}

	useEffect(() => {
		const localStorageUser = localStorage.getItem('user')
		if (localStorageUser) {
			const parsedUser = JSON.parse(localStorageUser)
			setUser(parsedUser)
		}
	}, [])

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
