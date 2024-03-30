import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

function TeamAbout() {
    const teamItems = [
        {id:1, img:"/images/doctors/1.jpg", name:"John Marshal", title:"Internist, Emergency Physician"},
        {id:2, img:"/images/doctors/2.jpg", name:"Marshal Root", title:"Orthopedic Surgeon"},
        {id:3, img:"/images/doctors/3.jpg", name:"Siamon john", title:"Orthopedic Surgeon"},
        {id:4, img:"/images/doctors/4.jpg", name:"Rishat Ahmed", title:"Orthopedic Surgeon"},
    ]

  return (
    <Box padding={'100px 0'}>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Box textAlign={'center'} marginBottom={'70px'}>
                    <Typography variant='h4' color={'#223a66'} fontSize={{xs: 22, sm:40}} marginBottom={'1.5rem'} fontWeight={700}>
                        Meet Our Specialist
                    </Typography>
                    <Typography variant='body2' width={40} height={5} bgcolor="#e12454" margin={{xs:"0 auto 1.3rem", md:'0 auto 1.3rem'}}></Typography>
                    <Typography variant='body' fontSize={{xs:15, sm:16}} lineHeight={'30px'} color={'#6F8BA4'}>
                        Today’s users expect effortless experiences. 
                        Don’t let essential people and processes stay stuck in the past. 
                        Speed it up, skip the hassles
                    </Typography>
                </Box>
            </Grid>

            {teamItems.map((doc)=> <Grid item xs={12} sm={6} md={3} key={doc.id}>
            <img src={doc.img} alt='img-doctor' width='100%' />
                <Typography variant='h2' color={'#222'} margin={'1.5rem 0 0.25rem'} fontSize={'1.3rem'} fontWeight={600} lineHeight={'30px'}>{doc.name}</Typography>
                <Typography variant='body2' fontSize={{xs:15, sm:16}} color={'#6F8BA4'}>{doc.title}</Typography>
            </Grid>)}
        </Grid>
    </Box>
  )
}

export default TeamAbout
