import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Banner() {
    return (
        <Box height={'500px'} position={'relative'}>
            <img src='/images/banner.jpg' alt='' width='100%' height='100%' style={{objectFit:"cover", }} />
            
            <Container>
                <Box position={'absolute'} top={0} width={{xs:"100%", sm:"90%",md:'34%'}} padding={{xs:'100px 0', md:'100px 25px'}}>
                    <Typography variant='body2' width={40} height={5} bgcolor="#e12454" marginBottom={'1.5rem'}></Typography>
                    
                    <Box paddingRight={{xs:'25px', sm:0}} marginBottom={'3rem'}>
                        <Typography variant='body' lineHeight={1.4} fontWeight={'bold'} fontSize={{xs:29, sm: 47}} marginRight={1}>
                        We are pleased to offer you the
                        <Typography variant='body' lineHeight={1.4} fontWeight={'bold'} marginLeft={1} fontSize={{xs:29, sm: 47}} color={'#223a66'}>chance to have the healthy</Typography>
                        </Typography>
                    </Box>

                    <Box display={'flex'} alignItems={'center'} width={'215px'} borderRadius={'50px'} padding={'.75rem 2rem'} color={'#FFF'} className='footer-btn'>
                    <button style={{border:"none", color:"#FFF", fontSize:"0.8125rem", fontWeight:"700", background:"none", marginRight:"10px", cursor:"pointer"}}>GET APPOINMENT</button>
                    <KeyboardArrowRightIcon fontSize='small' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner
