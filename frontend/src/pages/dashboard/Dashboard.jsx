import React from 'react'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser'

const Dashboard = () => {
  useRedirectLoggedOutUser("/login")
  return (
    <div className='min-h-screen'>Dashboard</div>
  )
}

export default Dashboard