import React from "react";
import { Box, Typography } from "@mui/material";

function CoverPages({title, text}) {
  return (
    <Box height={{xs:280,md:320}} color='#FFF'  textAlign='center' overflow='hidden' position='relative'>
      <Box  bgcolor='#223a66' height='100%' position='absolute' paddingTop={{xs:12, md:15}} top={0} right={0} left={0} bottom={0} zIndex={10} sx={{opacity:0.9}}>
        <Typography variant="body2" fontSize='15px' marginBottom={0.4}>{title}</Typography>
        <Typography variant="h1" fontSize={{xs: 30, md:50}} fontWeight='bold'>{text}</Typography>
      </Box>
    <Box position='absolute' top={{xs:-100}} bottom={-100} width='100%'>
      <img alt='cover' src="/images/22.jpg" width='100%' height='100%' style={{ objectFit:'cover'}}  />
    </Box>
    </Box>
  );
}

export default CoverPages;
