import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
function HomeFeature() {
    return (
        <Box marginTop={'-70px'} position={'relative'} zIndex={1000}>
            <Box padding={{xs:0, md:'0 30px'}} width={'100%'}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box bgcolor={'#FFF'} borderRadius={'15px'} boxShadow={'0px 0px 30px 0px rgba(0, 42, 106, 0.1)'} padding={'40px 30px'} width={'100%'}>
                            <LocalLibraryIcon sx={{fontSize:"50px", color:"#223a66", marginBottom:"1.5rem"}} />
                            <Typography variant='body2' color={'#6F8BA4'} fontSize={{xs:14, sm:16}}>24 Hours Service</Typography>
                            <Typography variant='h4' color={'#223a66'} marginBottom={'1rem'} fontSize={'1.3rem'} fontWeight={700} lineHeight={'30px'}>Online Appoinment</Typography>
                            <Typography variant='body2' color={'#6F8BA4'} marginBottom={'1rem'} fontSize={13} lineHeight={'30px'}>Get ALl time support for emergency.We have introduced the principle of family medicine.</Typography>
                            <button className='btn-color' style={{color:"#FFF", border:'#223a66', outline:"none", borderRadius:"50px", padding:'.75rem 2rem', fontSize:"0.8125rem", fontWeight:700, cursor:'pointer'}}>MAKE A APPOINMENT</button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box bgcolor={'#FFF'} borderRadius={'15px'} boxShadow={'0px 0px 30px 0px rgba(0, 42, 106, 0.1)'} padding={'40px 30px'} width={'100%'}>
                            <QueryBuilderIcon sx={{fontSize:"50px", color:"#223a66", marginBottom:"1.5rem"}} />
                            <Typography variant='body2' color={'#6F8BA4'} fontSize={{xs:14, sm:16}}>Timing schedule</Typography>
                            <Typography variant='h4' color={'#223a66'} marginBottom={'1rem'} fontSize={'1.3rem'} fontWeight={700} lineHeight={'30px'}>Working Hours</Typography>
                            
                            <Box  display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid #eee'} padding={'6px 0'}>
                                <Typography variant='body2' color={'#6F8BA4'} fontWeight={400} fontSize={16}>Sun - Wed :</Typography>
                                <Typography variant='body2' color={'#6F8BA4'} fontWeight={400} fontSize={16}>8:00 - 17:00</Typography>
                            </Box>

                            <Box  display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid #eee'} padding={'6px 0'}>
                                <Typography variant='body2' color={'#6F8BA4'} fontWeight={400} fontSize={16}>Thu - Fri :</Typography>
                                <Typography variant='body2' color={'#6F8BA4'} fontWeight={400} fontSize={16}>9:00 - 17:00</Typography>
                            </Box>

                            <Box  display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid #eee'} padding={'6px 0'}>
                                <Typography variant='body2' color={'#6F8BA4'} fontWeight={400} fontSize={16}>Sat - Sun :</Typography>
                                <Typography variant='body2' color={'#6F8BA4'} fontWeight={400} fontSize={16}>10:00 - 17:00</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box bgcolor={'#FFF'} borderRadius={'15px'} boxShadow={'0px 0px 30px 0px rgba(0, 42, 106, 0.1)'} padding={'40px 30px'} width={'100%'}>
                            <SupportAgentIcon sx={{fontSize:"50px", color:"#223a66", marginBottom:"1.5rem"}} />
                            <Typography variant='body2' color={'#6F8BA4'} fontSize={{xs:14, sm:16}}>Emegency Cases</Typography>
                            <Typography variant='h4' color={'#223a66'} marginBottom={'1rem'} fontSize={'1.3rem'} fontWeight={700} lineHeight={'30px'}>1-800-700-6200</Typography>
                            <Typography variant='body2' color={'#6F8BA4'} marginBottom={'1rem'} fontSize={13} lineHeight={'30px'}>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HomeFeature
