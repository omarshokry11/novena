import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function ServicesItems() {
    const serviceItems = [
        {id:1, img:"/images/service-1.jpg", title:"Child care"},
        {id:2, img:"/images/service-2.jpg", title:"Personal Care"},
        {id:3, img:"/images/service-3.jpg", title:"CT scan"},
        {id:4, img:"/images/service-4.jpg", title:"Joint replacement"},
        {id:5, img:"/images/service-5.jpg", title:"Examination & Diagnosis"},
        {id:6, img:"/images/service-6.jpg", title:"Alzheimer's disease"},
    ]

  return (
    <Box padding={'100px 0'}>
        <Container>
            <Grid container spacing={4} rowGap={7}>
            {serviceItems.map((item)=><Grid item sx={12} sm={6} md={4} key={item.id}>
                    <Box width={'100%'} bgcolor={'#FFF'} padding={'20px 20px 35px'} boxShadow={'0 0 38px rgba(21, 40, 82, 0.07)'} border={'1px solid rgba(0, 0, 0, 0.03)'}>
                        <img src={item.img} alt='img' width='100%' style={{marginTop:"-60px"}} />
                        <Typography variant='h4' fontSize={'1.3rem'} fontWeight={600} color={'#223a66'} marginBottom={2} marginTop={'1.5rem'}>{item.title}</Typography>
                        <Typography variant='body' lineHeight={'30px'} fontSize={'16px'} color={'#6F8BA4'} marginTop={'1.5rem'}>Saepe nulla praesentium eaque omnis perferendis a doloremque.</Typography>
                    </Box>
                </Grid>)}
                
            </Grid>
        </Container>
    </Box>
  )
}

export default ServicesItems
