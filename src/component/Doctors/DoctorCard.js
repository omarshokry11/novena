import { Grid, Typography, Box } from '@mui/material'
import React from 'react'

function DoctorCard({specialization, all}) {
    const doctorsItems = [
        {id: 1, img: "/images/doctors/1.jpg", name:"Thomas Henry", specialize:"Cardiology"},
        {id: 2, img: "/images/doctors/2.jpg", name:"Harrision Samuel", specialize:"Cardiology"},
        {id: 3, img: "/images/doctors/3.jpg", name:"Alexandar James", specialize:"Dental"},
        {id: 4, img: "/images/doctors/4.jpg", name:"Edward john", specialize:"Traumatology"},
        {id: 5, img: "/images/doctors/5.jpg", name:"Thomas Henry", specialize:"Neurology"},
        {id: 6, img: "/images/doctors/6.jpg", name:"Henry samuel", specialize:"Neurology"},
        {id: 7, img: "/images/doctors/7.jpg", name:"Thomas Henry", specialize:"Medicine"},
        {id: 8, img: "/images/doctors/8.jpg", name:"HarissonThomas", specialize:"Medicine"},
        {id: 9, img: "/images/doctors/9.jpg", name:"Jonas Thomson", specialize:"Pediatric"},
        {id: 10, img: "/images/doctors/10.jpg", name:"Henry Forth", specialize:"Pediatric"},
        {id: 11, img: "/images/doctors/11.jpg", name:"Thomas Henry", specialize:"Traumatology"},
        {id: 12, img: "/images/doctors/12.jpg", name:"Thomas Henry", specialize:"Dental"},
    ]

    return (
        <Grid container spacing={4}>
        {doctorsItems.map((doctor)=> 
            <>
                {specialization === doctor.specialize ? 
                    <Grid item xs={12} sm={6} md={3} key={doctor.id}>
                        <Box height={'270px'} overflow={'hidden'}>
                            <img className='img-doctor' src={doctor.img} alt='doctor-img' width={'100%'} height={'100%'} />
                        </Box>
                        <Typography className='footer-text' variant='h4' fontSize={'1.2rem'} color={'#222'} fontWeight={600} margin={'0.6rem 0 0.4rem'}>{doctor.name}</Typography>
                        <Typography variant='bod2' color={'#6F8BA4'} fontSize={16}>{doctor.specialize}</Typography> 
                    </Grid>
                : <>
                {all === "All Department" && 
                    <Grid item xs={12} sm={6} md={3} key={doctor.id}>
                            <Box height={'270px'} overflow={'hidden'}>
                                <img className='img-doctor' src={doctor.img} alt='doctor-img' width={'100%'} height={'100%'} />
                            </Box>
                            <Typography className='footer-text' variant='h4' fontSize={'1.2rem'} color={'#222'} fontWeight={600} margin={'0.6rem 0 0.4rem'}>{doctor.name}</Typography>
                            <Typography variant='bod2' color={'#6F8BA4'} fontSize={16}>{doctor.specialize}</Typography> 
                    </Grid>}
                </>}
            </>
            )}
        </Grid>
    )
}

export default DoctorCard
