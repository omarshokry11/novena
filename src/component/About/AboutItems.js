import React from 'react'
import { Box, Grid, Typography } from '@mui/material';


function AboutItems() {
  return (
    <Box padding={'100px 0'}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Typography variant='h2' width={'92%'} color={'#223a66'} fontSize={{xs:18, sm:44}} fontWeight={700}>Personal care for your healthy living</Typography>
            </Grid>

            <Grid item xs={12} md={8}>
                <Typography variant='body' width={{xs:'100%', md:'92%'}} color={'#6F8BA4'} lineHeight={'30px'} fontSize={{xs:14, md:16}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, 
                    quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, 
                    consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, 
                    libero delectus.
                </Typography>
                <Box marginTop={3} width={{xs:"45%", md:"30%"}}><img src='/images/sign.png' alt='img' width='100%' /></Box>
            </Grid>
        </Grid>

    </Box>
  )
}

export default AboutItems
