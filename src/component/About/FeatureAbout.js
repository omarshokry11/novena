import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

function FeatureAbout() {
    const featureItems = [
        {id:1, img:"/images/service-1.jpg", title:"Healthcare for Kids"},
        {id:2, img:"/images/service-2.jpg", title:"Medical Counseling"},
        {id:3, img:"/images/service-3.jpg", title:"Modern Equipments"},
        {id:4, img:"/images/service-4.jpg", title:"Qualified Doctors"},
    ]

  return (
    <Box>
        <Grid container spacing={4}>
            {featureItems.map((item)=> <Grid item xs={12} sm={6} md={3} key={item.id}>
                <img src={item.img} width={'100%'} alt='img-feature' />
                <Typography variant='h4' fontSize={'1.3rem'} margin={'1rem 0'} fontWeight={700} color={'#222'}>{item.title}</Typography>
                <Typography variant='body' lineHeight={'30px'} fontSize={{xs:14, md:16}} color={'#6F8BA4'}>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</Typography>
            </Grid>)}       
        </Grid>
    </Box>
  )
}

export default FeatureAbout
