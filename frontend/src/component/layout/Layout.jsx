import React from 'react'
import Dashboard from '../../pages/dashboard/Dashboard'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div style={{}}>
        <Dashboard />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout