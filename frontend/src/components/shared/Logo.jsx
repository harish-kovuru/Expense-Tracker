import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
   <Link to ="/">
    <img src="./src/assets/expense-logo.png" alt="logo" 
    className='w-14'/>
   </Link>
  )
}

export default Logo
