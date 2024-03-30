import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
// Components
import AppBar from "./AppBar";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropDown, setDropDown] = useState(false)

  return (
    <Box>
      <AppBar />
      <Container>
        <Box padding="20px 0" display='flex' justifyContent='space-between' alignItems='center'>

          <Box width='50%'>
            <Box width={{xs:"80%",md:'35%'}}>
              <Link to='/'><img alt="" src="./logo-nav.png" width='100%' /></Link>
            </Box>
          </Box>

          <Box width='50%' display={{xs:"none", md:"block"}}>
            <ul style={{padding:"0", margin:"0",display:"flex",alignItems:"center", justifyContent:"space-evenly",listStyle:"none"}}>
            <li><Link to="/" style={{textDecoration:"none", fontWeight:"600", fontSize:"16px",color:"#222"}}>Home</Link></li>
            <li><Link to="/about" style={{textDecoration:"none", fontWeight:"600", fontSize:"16px",color:"#222"}}>About</Link></li>
            <li><Link to="/services" style={{textDecoration:"none", fontWeight:"600", fontSize:"16px",color:"#222"}}>Services</Link></li>
            <li><Link to="/department" style={{textDecoration:"none", fontWeight:"600", fontSize:"16px",color:"#222"}}>Department</Link></li>
            <li><Link to="/doctors" style={{textDecoration:"none", fontWeight:"600", fontSize:"16px",color:"#222"}}>Doctors</Link></li>
            <li><Link to="/blog" style={{textDecoration:"none", fontWeight:"600", fontSize:"16px",color:"#222"}}>Blog</Link></li>
            <li><Link to="/contact" style={{textDecoration:"none", fontWeight:"600", fontSize:"16px",color:"#222"}}>Contact</Link></li>
            
            </ul>
          </Box>

            <Box  width='50%' display={{xs:"block", md:"none"}} textAlign='right'>
              <div onClick={()=>setDropDown(!dropDown)} >
                <MenuIcon sx={{cursor:"pointer",fontSize:"34px"}}  />
              </div>
            </Box>
          
          </Box>
          {dropDown && <Dropdown />}
      </Container>
    </Box>
  );
}

export default Navbar;
