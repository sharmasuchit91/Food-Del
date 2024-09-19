import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Siderbar from './components/Sidebar/Siderbar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  
  const url = "http://localhost:4000"
  

  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Siderbar/>
         <Routes>
             <Route path='/add'       element ={<Add url={url}/>}/>
             <Route path='/list'      element={<List url={url}/>}/>
             <Route path='/orders'  element={<Orders url={url}/>}/>
         </Routes>
      </div>
    </>
  )
}

export default App
