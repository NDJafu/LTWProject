import React from 'react'
import Navbar from "../Navbar/Navbar";
import AdiClub from "../Banner/Adiclub";
import FooterNav from "../Footer/FooterNav";
import Footer from "../Footer/Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar/> 
      <main className=''><Outlet/></main>
      <AdiClub/>
      <FooterNav/>
      <Footer/>
    </div>
  )
}

export default Layout