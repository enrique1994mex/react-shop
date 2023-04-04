import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios(API)
			setProducts(data)
		}
		getProducts()
	}, [])
	return products
}

export default useGetProducts
