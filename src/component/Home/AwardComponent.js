import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ColorizeIcon from '@mui/icons-material/Colorize';
import BlindOutlinedIcon from '@mui/icons-material/BlindOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';

function AwardComponent() {
    const awardItems = [
        {id:1, icon:<ScienceOutlinedIcon sx={{fontSize:60, color:"#e12454"}} />, title:"Laboratory services", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:2, icon:<FavoriteIcon sx={{fontSize:60, color:"#e12454"}} />, title:"Heart Disease", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:3, icon:<ColorizeIcon sx={{fontSize:60, color:"#e12454"}} />, title:"Dental Care", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:4, icon:<BlindOutlinedIcon sx={{fontSize:60, color:"#e12454"}} />, title:"Body Surgery", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:5, icon:<PsychologyAltOutlinedIcon sx={{fontSize:60, color:"#e12454"}} />, title:"Neurology Sargery", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
        {id:6, icon:<CoronavirusOutlinedIcon sx={{fontSize:60, color:"#e12454"}} />, title:"Gynecology", desc:"Saepe nulla praesentium eaque omnis perferendis a doloremque."},
    ]

    return (
        <Box marginTop={10}>
            <Grid container spacing={4}>
                {awardItems.map((award)=><Grid item xs={12} sm={6} md={4} key={award.id}>
                    <Box bgcolor={'#FFF'} borderRadius={'5px'} padding={'30px'}>
                        <Box display={'flex'} alignItems={'center'} marginBottom={2}>
                            {award.icon}
                            <Typography variant='h4' marginLeft={1.5} fontSize={'1.3rem'} fontWeight={700} color={'#222'}>{award.title}</Typography>
                        </Box>
                        <Typography variant='h4' fontSize={'16px'} lineHeight={'30px'} fontWeight={400} color={'#6F8BA4'}>{award.desc}</Typography>
                    </Box>
                </Grid>)}
            </Grid>
        </Box>
    )
}

export default AwardComponent
