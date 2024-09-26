import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center flex-col gap-10">
      <NavBar />
      <div className='flex-1 flex justify-center items-center'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage