import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="movies">Movies</Link></li>
      </ul>
    </>
    )
}

export default Navbar
