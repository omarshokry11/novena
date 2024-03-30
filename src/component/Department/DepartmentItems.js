import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function DepartmentItems() {
    const departmentItems = [
        {id:1, img:"/images/service-1.jpg", title: "Opthomology", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:2, img:"/images/service-2.jpg", title: "Cardiology", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:3, img:"/images/service-3.jpg", title: "Dental Care", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:4, img:"/images/service-4.jpg", title: "Child Care", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:5, img:"/images/service-5.jpg", title: "Pulmology", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:6, img:"/images/service-6.jpg", title: "Gynecology", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
    ]

    return (
        <Box paddingTop={8}>
            <Grid container spacing={4}>
                {departmentItems.map((item)=> <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <img src={item.img} alt='department-img' width={'100%'} />

                    <Box>
                        <Typography variant='h4' margin={'1.5rem 0 0.5rem'} color={'##223a66'} lineHeight={'30px'} fontSize={'1.3rem'} fontWeight={700}>{item.title}</Typography>
                        <Typography variant='body2' color={'#6F8BA4'} marginBottom={'1.5rem'} fontSize={{xs:14, sm:16}}>{item.desc}</Typography>
                        <Typography variant='body2' color={'#223a66'} fontSize={{xs:14, sm:16}} className='footer-text' display={'flex'} alignItems={'center'}>Learn More <KeyboardArrowRightIcon sx={{fontSize:"18px", marginLeft:"5px"}} /> </Typography>
                    </Box>
                </Grid>)}
            </Grid>
        </Box>
    )
}

export default DepartmentItems
