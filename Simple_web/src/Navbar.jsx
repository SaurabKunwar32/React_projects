import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar(){

  let[isNavVisible,setisNavVisible]=useState(false);

  let toggleNav=()=>{
    setisNavVisible((prev)=> !prev);
  }

    return(
        <div className="component">
        <nav className="navBar container">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>

        <ul className="lists">
          <li><a href="#">Home</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      <div className="menu">
        <button className="btn login">Login</button>
        <MenuIcon className='menuBox' onClick={toggleNav} />
        <nav className={`navBar lists li ${isNavVisible ? 'view' : ''}`}></nav>
        </div>
      </nav>
      </div>
    )
}