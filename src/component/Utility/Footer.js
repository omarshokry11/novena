import React from 'react'
import { Link } from "react-router-dom"
import { Box, Container, Grid, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
    const footerItems = [
        {
            id:1, title:"Department", 
            items:[
                {id:1, text:"Surgery"},
                {id:2, text:"Wome's Health"},
                {id:3, text:"Radiology"},
                {id:4, text:"Cardioc"},
                {id:5, text:"Medicine"},
            ]
        },
        {
            id:2, title:"Support", 
            items:[
                {id:1, text:"Terms & Conditions"},
                {id:2, text:"Privacy Policy"},
                {id:3, text:"Company Support"},
                {id:4, text:"FAQuestions"},
                {id:5, text:"Company Licence"},
            ]
        },
    ]

  return (
    <Box paddingTop={'100px'} bgcolor={'#f4f9fc'}>
        <Container>
            <Grid container rowGap={4}>
            
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Box width={'50%'} marginBottom={3}>
                        <Link to='/'><img alt="" src="./logo-nav.png" width='100%' /></Link>
                    </Box>
                    <Typography variant='body' color={'#6F8BA4'}>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</Typography>
                    <Box marginTop={3} display={'flex'}>
                        <Link to='/' style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", width:"45px", height:"45px", borderRadius:"50%", backgroundColor:"#6F8BA4", color:"#FFF"}}><FacebookOutlinedIcon sx={{fontSize:"22px"}} /></Link>
                        <Link to='/' style={{margin:"0 10px", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", width:"45px", height:"45px", borderRadius:"50%", backgroundColor:"#6F8BA4", color:"#FFF"}}><TwitterIcon sx={{fontSize:"22px"}} /></Link>
                        <Link to='/' style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", width:"45px", height:"45px", borderRadius:"50%", backgroundColor:"#6F8BA4", color:"#FFF"}}><LinkedInIcon sx={{fontSize:"22px"}} /></Link>
                    </Box>
                </Grid>

                {footerItems.map((item)=><Grid item xs={12} sm={6} md={6} lg={2} key={item.id}>
                    <Typography variant='h4' color={'#223a66'} fontSize={'1.3rem'} fontWeight={600}>{item.title}</Typography>
                    <Typography variant='body2' width={45} height={3} margin={'15px 0 30px'} bgcolor="#e12454"></Typography>
                    <ul style={{padding:"0", margin:"0",listStyle:"none"}}>
                        {item.items.map((text)=><li key={text.id} className='footer-text' style={{marginBottom:"10px", fontSize:"16px", fontWeight:500}}>{text.text}</li>)}
                    </ul>
                </Grid>)}

                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Typography variant='h4' color={'#223a66'} fontSize={'1.3rem'} fontWeight={600}>Get In Touch</Typography>
                    <Typography variant='body2' width={45} height={3} margin={'15px 0 30px'} bgcolor="#e12454"></Typography>
                    <Box marginBottom={3}>
                        <Typography variant='body2' color={'#6F8BA4'} marginBottom={1}><EmailIcon sx={{fontSize:"17px", marginRight:"10px"}} /> Support Available for 24/7</Typography>
                        <Typography variant='h4' color={'#222'} fontSize={'1.3rem'} fontWeight={600} className='footer-text'>Support@email.com</Typography>
                    </Box>

                    <Box>
                        <Typography variant='body2' color={'#6F8BA4'} marginBottom={1}><LocationOnIcon sx={{fontSize:"17px", marginRight:"10px"}} /> Mon to Fri : 08:30 - 18:00</Typography>
                        <Typography variant='h4' color={'#222'} fontSize={'1.3rem'} fontWeight={600} className='footer-text'>+23-456-6588</Typography>
                    </Box>
                </Grid>

            </Grid>

            <Box marginTop={8} borderTop={'1px solid rgba(0, 0, 0, 0.06)'}>
                <Box padding={'1.5rem 0 0.7rem'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box display={'flex'} alignItems={'center'}>
                                <Typography variant='body2' marginRight={1} color={'#6F8BA4'}>&copy; Copyright Reserved to Novena by</Typography>
                                <Typography className='footer-text' variant='h6' fontSize={16} fontWeight={600} color={'#222'}>Themefisher</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box display={'flex'} alignItems={'center'} bgcolor={'#FFF'} width={"100%"} borderRadius={'50px'} height={'50px'}>
                                <input type='text' placeholder='Your Email address' style={{fontSize:"15px", width:"60%", height:"100%", padding:"0 10px 0 25px", border:"none", borderRadius:"50px", outline:"none"}}  />
                                <button className='footer-btn' style={{width:"40%", borderRadius:"50px", border:"none", color:"#FFF", height:"100%", fontSize:"16px",fontWeight:"bold"}}>SUBSCRIBE</button>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box textAlign={{md:"center"}} marginTop={2}>
                        <Typography display={'inline-block'} variant='body2' marginRight={1} color={'#6F8BA4'} fontSize={16} fontWeight={400}>Distributed by</Typography>
                        <Typography display={'inline-block'} className='footer-text' variant='h6' fontSize={16} fontWeight={600} color={'#222'}>Themewagon</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer
