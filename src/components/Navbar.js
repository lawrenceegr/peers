import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/resources'>Resources</Link>
    </div>
  )
}
