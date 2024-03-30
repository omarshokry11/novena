import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactItem() {
    const contactItems = [
        {id:1, icon:<SupportAgentIcon sx={{marginBottom:"5px", fontSize:'50px', color:"#e12454"}} />, name:'Call Us', title:"+823-4565-13456"},
        {id:2, icon:<EmailIcon sx={{marginBottom:"5px", fontSize:'50px', color:"#e12454"}} />, name:'Email Us', title:"contact@mail.com"},
        {id:3, icon:<LocationOnIcon sx={{marginBottom:"5px", fontSize:'50px', color:"#e12454"}} />, name:'Location', title:"North Main Street,Brooklyn Australia"},
    ]

  return (
    <Box padding="100px 0" textAlign='center'>
      <Container>
      <Grid container spacing={2}>

        {contactItems.map((item)=><Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box border='5px solid #EEF2F6' padding='50px 25px' width={{xs:'100%',md: '95%'}} margin='0 auto'>
                <Box>
                    {item.icon}
                </Box>
                <Typography variant='h5' color='#222' fontSize='1.25rem' fontWeight={700} marginBottom={1}>{item.name}</Typography>
                <Typography variant='h5' color='#6F8BA4' fontSize='0.95rem'>{item.title}</Typography>
            </Box>
        </Grid>)}

      </Grid>
      </Container>
    </Box>
  )
}

export default ContactItem
