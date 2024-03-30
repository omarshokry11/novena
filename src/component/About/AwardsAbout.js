import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

function AwardsAbout() {
    const awardItems = [
        {id:1, img:"images/award/3.png"},
        {id:2, img:"images/award/4.png"},
        {id:3, img:"images/award/1.png"},
        {id:4, img:"images/award/2.png"},
        {id:5, img:"images/award/5.png"},
        {id:6, img:"images/award/6.png"},
    ]

  return (
    <Box padding={'100px 0'}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Box display={'flex'} alignItems={'center'} height={{md:250}}>
                    <Box>
                        <Typography variant='h2' marginBottom={3} color={'#223a66'} fontSize={{xs:19, sm:44}} fontWeight={700}>Our Doctors achievements</Typography>
                        <Typography variant='body2' width={40} height={5} bgcolor="#e12454" marginBottom={{xs:"1.3rem", md:0}}></Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} md={8}>
                <Grid container columnSpacing={4} rowSpacing={1.5}>
                    {awardItems.map((item)=> <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#eff0f3'} height={'120px'}>
                        <img src={item.img} alt='img-award' />
                    </Box>
                </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AwardsAbout
