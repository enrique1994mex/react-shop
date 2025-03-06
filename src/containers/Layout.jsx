import { useState, useEffect } from 'react'
import Header from 'components/Header'

const Layout = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token'); 
		setIsLoggedIn(!!token); 
	}, []);

	return (
		<div className='Layout'>
			{isLoggedIn && <Header />}
			{children}
		</div>
	)
}

export default Layout
