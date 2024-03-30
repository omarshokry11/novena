import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function HomeCover() {
    return (
        <Box height={'600px'} overflow={'hidden'} position={'relative'} zIndex={10}>
            <Box display={{xs:"none", md:"block"}}>
                <img src='/images/slider-bg-1.jpg' alt='home-cover' width={'100%'} style={{objectFit:"cover"}} />
            </Box>

            <Container>
                <Box position={'absolute'} top={0} padding={'80px 0 180px'} zIndex={1000} width={{xs:'80%', md:'60%', lg:"30%"}}>
                    <Typography variant='body2' width={40} height={5} marginBottom={'1rem'} bgcolor="#e12454"></Typography>
                    <Typography variant='h2' color='#6F8BA4' fontSize={{xs:12, sm:14}} letterSpacing={'2px'} fontWeight={400}>TOTAL HEALTH CARE SOLUTION</Typography>
                    <Typography variant='h2' color='#223a66' margin={'1rem 0'} fontSize={{xs:40, sm:50, md:60}} fontWeight={700}>Your Most Trusted Health Partner</Typography>
                    <Typography variant='h2' color='#6F8BA4' lineHeight={'30px'} margin={'1rem 0'} fontSize={{xs:14, sm:16}} fontWeight={400}>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</Typography>

                    <Box display={'flex'} alignItems={'center'} width={'225px'} borderRadius={'50px'} padding={'.75rem 2rem'} color={'#FFF'} className='footer-btn'>
                        <button style={{border:"none", color:"#FFF", fontSize:"0.8125rem", fontWeight:"700", background:"none", marginRight:"10px", cursor:"pointer"}}>MAKE APPOINMENT</button>
                        <KeyboardArrowRightIcon fontSize='small' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default HomeCover
