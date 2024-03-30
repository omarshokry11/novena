import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function BookAppoinment() {
    const choose= [
        {id:1, name:[
            {id:1, title:"Choose Department"},{id:2, title:"Software Design"},{id:3, title:"Development cycle"},{id:4, title:"Software Development"},
            {id:5, title:"Maintenance"},{id:6, title:"Process Query"},{id:7, title:"Cost and Duration"},{id:8, title:"Modal Delivery"},
        ]},
        {id:2, name:[
            {id:1, title:"Select Doctors"},{id:2, title:"Software Design"},{id:3, title:"Development cycle"},{id:4, title:"Software Development"},
            {id:5, title:"Maintenance"},{id:6, title:"Process Query"},{id:7, title:"Cost and Duration"},{id:8, title:"Modal Delivery"},
        ]}
    ]
    
    return (
        <Box padding={'100px 0'}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box position={'relative'} width={'100%'}>
                            <img src='/images/home/img-3.jpg' alt='book-img' width={'85%'} />
                            <Typography variant='h4' fontSize={{xs:25, sm:50}} fontWeight={700} textAlign={'center'} padding={'48px'} width={{xs:"85%",sm:"75%", md:"95%"}} position={'absolute'} bottom={'20px'} left={{xs:"50px",sm:"170px", md:"10px"}} color={'#FFF'} bgcolor={'#223a66'}>+23 345 67980</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box padding={'30px 0'}>
                            <Typography variant='h4' fontSize={{xs:20, sm:40}} fontWeight={700} color={'#223a66'} marginBottom={'.5rem'}>Book appoinment</Typography>
                            <Typography variant='h4' fontSize={16} lineHeight={'30px'} color={'#6F8BA4'}>
                                Mollitia dicta commodi est recusandae iste, 
                                natus eum asperiores corrupti qui velit . 
                                Iste dolorum atque similique praesentium soluta.
                            </Typography>

                            <Box marginTop={'1.5rem'} display={{xs:"block", md:'flex'}} justifyContent={'space-between'} alignItems={'center'}>
                                {choose.map((items)=><Box key={items.id} width={{xs:'100%', md:'48%'}} marginBottom={{xs:'1rem', md:0}}>
                                    <select style={{display:'inline-block', padding:".375rem .75rem", width:"100%", backgroundColor:"#f4f9fc", borderColor:"rgba(0, 0, 0, 0.05)", height:"55px", outline:"none", fontSize:"14px"}}>
                                        {items.name.map((item)=><option key={item.id}>{item.title}</option>)}
                                    </select>
                                </Box>)}
                            </Box>

                            <Box marginTop={'1rem'} display={{xs:"block", md:'flex'}} justifyContent={'space-between'} alignItems={'center'}>
                                <Box width={{xs:'100%', md:'48%'}}  marginBottom={{xs:'1rem', md:0}}>
                                    <input type='text' placeholder='dd/mm/yyyy'  style={{display:'inline-block', padding:".375rem .75rem", width:"100%", backgroundColor:"#f4f9fc", borderColor:"rgba(0, 0, 0, 0.05)", height:"55px", outline:"none", fontSize:"14px"}} />
                                </Box>
                                <Box width={{xs:'100%', md:'48%'}}>
                                    <input type='text' placeholder='Time'  style={{display:'inline-block', padding:".375rem .75rem", width:"100%", backgroundColor:"#f4f9fc", borderColor:"rgba(0, 0, 0, 0.05)", height:"55px", outline:"none", fontSize:"14px"}} />
                                </Box>
                            </Box>

                            <Box marginTop={'1rem'} display={{xs:"block", md:'flex'}} justifyContent={'space-between'} alignItems={'center'}>
                                <Box width={{xs:'100%', md:'48%'}}  marginBottom={{xs:'1rem', md:0}}>
                                    <input type='text' placeholder='Full Name'  style={{display:'inline-block', padding:".375rem .75rem", width:"100%", backgroundColor:"#f4f9fc", borderColor:"rgba(0, 0, 0, 0.05)", height:"55px", outline:"none", fontSize:"14px"}} />
                                </Box>
                                <Box width={{xs:'100%', md:'48%'}}>
                                    <input type='number' placeholder='Phone Number'  style={{display:'inline-block', padding:".375rem .75rem", width:"100%", backgroundColor:"#f4f9fc", borderColor:"rgba(0, 0, 0, 0.05)", height:"55px", outline:"none", fontSize:"14px"}} />
                                </Box>
                            </Box>

                            <Box marginTop={'1rem'}>
                                <textarea type='text' rows={8} placeholder='Your Message'  style={{display:'inline-block', padding:".375rem .75rem", minWidth:"100%", maxWidth:"100%", backgroundColor:"#f4f9fc", borderColor:"rgba(0, 0, 0, 0.05)", height:"auto", outline:"none", fontSize:"14px"}} />
                            </Box>

                            <Box marginTop={'1.25rem'} display={'flex'} alignItems={'center'} width={'220px'} borderRadius={'50px'} padding={'.85rem 2rem'} color={'#FFF'} className='btn-color'>
                                <button style={{border:"none", color:"#FFF", fontSize:"0.8125rem", fontWeight:"700", background:"none", marginRight:"10px", cursor:"pointer"}}>MAKE APPOINMENT</button>
                                <KeyboardArrowRightIcon fontSize='small' />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default BookAppoinment
