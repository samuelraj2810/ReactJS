import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './NavBar/Home'
import HomePage from './NavBar/HomePage'
import About from './NavBar/About'
import Contact from './NavBar/Contact'
import Service from './NavBar/Service'
import PageNotFound from './PNF_ERR/PageNotFound'

const Routers = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />}>    

        <Route path='Home' element={<Home />}/>
        <Route path='About' element={<About />}/>
        <Route path='Contact' element={<Contact />}/>
        <Route path='Service' element={<Service />}/>

      </Route>

      <Route path='*' element={<PageNotFound />} />

    </Routes>
  );
}

export default Routers