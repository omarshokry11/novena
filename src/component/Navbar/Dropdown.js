import React from 'react';
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div className='dropdown-menu'>
      <ul style={{padding:"0 10px", margin:"0",listStyle:"none"}} >
        <li style={{margin:"20px 0"}}><Link to="/" style={{textDecoration:"none", fontSize:"16px",fontWeight:"600",color:"#222"}}>Home</Link></li>
        <li style={{margin:"20px 0"}}><Link to="/about" style={{textDecoration:"none", fontSize:"16px",fontWeight:"600",color:"#222"}}>About</Link></li>
        <li style={{margin:"20px 0"}}><Link to="/services" style={{textDecoration:"none", fontSize:"16px",fontWeight:"600",color:"#222"}}>Services</Link></li>
        <li style={{margin:"20px 0"}}><Link to="/department" style={{textDecoration:"none", fontSize:"16px",fontWeight:"600",color:"#222"}}>Department</Link></li>
        <li style={{margin:"20px 0"}}><Link to="/doctors" style={{textDecoration:"none", fontSize:"16px",fontWeight:"600",color:"#222"}}>Doctors</Link></li>
        <li style={{margin:"20px 0"}}><Link to="/blog" style={{textDecoration:"none", fontSize:"16px",fontWeight:"600",color:"#222"}}>Blog</Link></li>
        <li style={{margin:"20px 0"}}><Link to="/contact" style={{textDecoration:"none", fontSize:"16px",fontWeight:"600",color:"#222"}}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Dropdown
