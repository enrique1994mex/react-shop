import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import RecoveyPassword from '../pages/RecoveryPassword'
import SendEmail from '../pages/SendEmail'
import NewPassword from '../pages/NewPassword'
import MyAccount from '../pages/MyAccount'
import CreateAccount from '../pages/CreateAccount'
import Checkout from '../pages/Checkout'
import Orders from '../pages/Orders'
import NotFound from '../pages/NotFound'
import AppProvider from '../context/AppContext'
import { AuthProvider, AuthRoute } from '../context/Auth'

import '../styles/global.css'

// basename='/react-shop'

const App = () => {
	return (
		<AppProvider>
			<BrowserRouter basename='/react-shop'>
				<AuthProvider>
					<Layout>
						<Routes>
							<Route
								path='/'
								element={
									<AuthRoute>
										<Home />
									</AuthRoute>
								}
							/>
							<Route path='/login' element={<Login />} />
							<Route path='/password-recovery' element={<RecoveyPassword />} />
							<Route path='/send-email' element={<SendEmail />} />
							<Route path='/new-password' element={<NewPassword />} />
							<Route
								path='/account'
								element={
									<AuthRoute>
										<MyAccount />
									</AuthRoute>
								}
							/>
							<Route path='/signup' element={<CreateAccount />} />
							<Route
								path='/checkout'
								element={
									<AuthRoute>
										<Checkout />
									</AuthRoute>
								}
							/>
							<Route
								path='/orders'
								element={
									<AuthRoute>
										<Orders />
									</AuthRoute>
								}
							/>
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Layout>
				</AuthProvider>
			</BrowserRouter>
		</AppProvider>
	)
}

export default App
