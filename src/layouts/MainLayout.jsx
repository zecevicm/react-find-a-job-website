import {Outlet} from 'react-router-dom';
import NavBar from '../components/Navbar';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
   <>
    <NavBar />
    <Outlet />
    <ToastContainer/>
   </>
  )
}

export default MainLayout