import Header from 'components/Header'
import 'styles/containers/Layout.scss'

const Layout = ({ children }) => {
	
	return (
		<div className='Layout'>
			<Header />
			<main className='Layout-content'>
				{children}
			</main>
		</div>
	)
}

export default Layout
