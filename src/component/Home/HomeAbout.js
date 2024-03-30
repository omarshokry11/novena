import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function HomeAbout() {
    return (
        <Box padding={'100px 0'}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Box display={{xs:"block", sm:'flex'}} alignItems={'center'} justifyContent={'space-between'}>
                        <Box width={{xs:"100%", sm:"48%", md:"48%"}}>
                            <img src='/images/home/img-1.jpg' alt='about-img' width={'100%'} style={{borderRadius:'5px', boxShadow:"0px 0px 30px 0px rgba(0, 42, 106, 0.1)", marginBottom:"1.5rem"}} />
                            <img src='/images/home/img-2.jpg' alt='about-img' width={'100%'} style={{borderRadius:'5px', boxShadow:"0px 0px 30px 0px rgba(0, 42, 106, 0.1)"}} />
                            </Box>
                        <Box width={{xs:"100%", sm:'48%', md:"48%"}} marginTop={{xs:'1.5rem', sm:0}}>
                            <img src='/images/home/img-3.jpg' alt='about-img' width={'100%'} style={{borderRadius:'5px', boxShadow:"0px 0px 30px 0px rgba(0, 42, 106, 0.1)"}} />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box display={'flex'} alignItems={'center'} height={{md:'648px'}} marginTop={{xs:"1.5rem", md:0}}>
                        <Box paddingLeft={'1.5rem'}>
                            <Typography variant='h2' width={{xs:"47%", sm:"48%", md:"95%"}} fontSize={{xs:22, sm:44}} color={'#223a66'} fontWeight={700}>Personal care & healthy living</Typography>
                            <Typography variant='body2' width={'100%'} fontSize={{xs:14, sm:16}} marginBottom={'3rem'} marginTop={'1.5rem'} lineHeight={'30px'} color={'#6F8BA4'} fontWeight={400}>We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</Typography>
                            <Box display={'flex'} alignItems={'center'} width={{xs:'170px', md:'150px'}} borderRadius={'50px'} padding={'.75rem 2rem'} color={'#FFF'} className='footer-btn'>
                                <button style={{border:"none", color:"#FFF", fontSize:"0.8125rem", fontWeight:"700", background:"none", marginRight:"10px", cursor:"pointer"}}>SERVICES</button>
                                <KeyboardArrowRightIcon fontSize='small' />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
    }

export default HomeAbout
