import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "97vh", background:"white"}} >
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout