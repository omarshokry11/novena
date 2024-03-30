import { Box, Typography } from '@mui/material'
import React from 'react'

function TitlePages({title, desc, width}) {
    return (
        <Box textAlign={'center'}>
            <Typography variant='h2' color='#223a66' fontSize={{xs:"22px", sm:"44px"}} fontWeight='bold'>{title}</Typography>
            <Typography variant='body2' width={40} height={5} bgcolor="#e12454" margin='20px auto'></Typography>
            <Typography variant='body2' width={{xs:"94%",  sm:"90%", md:width}} fontSize={{xs:15, sm:16}} fontWeight={400} color={'#6F8BA4'} lineHeight={'30px'} margin={'1rem auto'}>
                {desc}
            </Typography>
        </Box>
    )
}

export default TitlePages
