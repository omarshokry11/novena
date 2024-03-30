import React from 'react'
import { Box } from "@mui/material";
import CoverPages from '../../component/Utility/CoverPages';
import ServicesItems from '../../component/Services/ServicesItems';
import Banner from '../../component/Utility/Banner';


function Services() {
  return (
     <Box>
        <CoverPages title='Our services' text='What We Do' />
        <ServicesItems />
        <Banner />
    </Box>
  )
}

export default Services
