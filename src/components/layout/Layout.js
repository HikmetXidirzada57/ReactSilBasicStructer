import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'
import HeaderDetail from '../header/HeaderDetail'

const Layout = (props) => {
    const [isGreen, setisGreen] = useState(true)

    const  location=useLocation()
    useEffect(() => { 
      if (location.pathname=="/") {
        setisGreen(!isGreen)
      }
    console.log(location);    
    }, [location])
    
  return (
 <div className='layout'>
  {!isGreen ? (
    <Header/>
  ):(
    <HeaderDetail/>
  ) }
    {props.children}
  <Footer/>
 </div>
  )
}

export default Layout