import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductForm from '../../components/product/productForm/ProductForm'
import ProductList from '../../components/product/productList/ProductList'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser'
import { selectisLoggedIn } from '../../redux/features/auth/authSlice'
import { getProducts } from '../../redux/features/product/productService'



const Dashboard = () => {
  useRedirectLoggedOutUser("/login")

  return (
    <div className="bg-primary-content" >
      <h2>Dashboard</h2>
      <ProductForm />
    </div>
  )
}

export default Dashboard;