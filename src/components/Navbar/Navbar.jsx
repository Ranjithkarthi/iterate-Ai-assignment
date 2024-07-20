import React, { useState } from 'react'
import {navAssets} from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {

  const [navItem, setNavItem] = useState("home");

  return (
    <div className='navbar'>
        <img src={navAssets.img_puja_seva_logo_en} className="logo" />
        <ul className="navbar-menu">
          <li onClick={()=> setNavItem("home")} className={navItem ==="home" ? "active": ""}>Home</li>
          <li onClick={()=> setNavItem("puja")} className={navItem ==="puja" ? "active": ""}>Puja</li>
          <li onClick={()=> setNavItem("panchag")} className={navItem ==="panchag" ? "active": ""}>Panchang</li>
          <li onClick={()=> setNavItem("temples")} className={navItem ==="temples" ? "active": ""}>Temples</li>
          <li onClick={()=> setNavItem("library")} className={navItem ==="library" ? "active": ""}>Library</li>
        </ul>
        <div className="navbar-right">
          <div className="navbar-search-icon">
            <img src={navAssets.default_profile} />
            <div className="dot"></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar