import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function ContactUs() {
  return (
    <Box paddingBottom='100px'>
        <Container>
            <Box textAlign='center' marginBottom={8}>
                <Typography variant='h2' color='#223a66' fontSize="2.25rem" fontWeight='bold'>Contact us</Typography>
                <Typography variant='body2' width={50} height={5} bgcolor="#e12454" margin='25px auto'></Typography>                    
                <Typography variant='body2' width={{xs:'100%', md:'45%'}} margin='25px auto' color='#6F8BA4' fontSize={16} fontWeight={400}>Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</Typography>                    
            </Box>

            <Box margin={'0 auto'}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <input type='text' placeholder='Your Full Name' style={{fontSize:"14px", width:"100%", height:"60px", padding:"10px", borderRadius:"10px", border:"1px solid #EEF2F6", backgroundColor:"#f4f9fc", outline:"none", color:"#6F8BA4"}} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <input type='text' placeholder='Your Email Addres' style={{fontSize:"14px", width:"100%", height:"60px", padding:"10px", borderRadius:"10px", border:"1px solid #EEF2F6", backgroundColor:"#f4f9fc", outline:"none", color:"#6F8BA4"}} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <input type='text' placeholder='Your Query Topic' style={{fontSize:"14px", width:"100%", height:"60px", padding:"10px", borderRadius:"10px", border:"1px solid #EEF2F6", backgroundColor:"#f4f9fc", outline:"none", color:"#6F8BA4"}} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <input type='text' placeholder='Your Phone Number' style={{fontSize:"14px", width:"100%", height:"60px", padding:"10px", borderRadius:"10px", border:"1px solid #EEF2F6", backgroundColor:"#f4f9fc", outline:"none", color:"#6F8BA4"}} />
                    </Grid>

                    <Grid item xs={12}>
                        <textarea rows={8} placeholder='Your Message' style={{fontSize:"14px", maxWidth:"100%",width:"100%", padding:"10px", borderRadius:"10px", border:"1px solid #EEF2F6", backgroundColor:"#f4f9fc", outline:"none", color:"#6F8BA4"}} />
                    </Grid>

                    <Grid item xs={12}>
                        <Box textAlign={'center'}>
                            <input className='submit-btn' type='submit' value='SEND MESSEGE' style={{fontSize:"16px",padding:"15px 30px", borderRadius:"50px", color:"#FFF", outline:"none"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
  )
}

export default ContactUs
