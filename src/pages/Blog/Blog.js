import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import CoverPages from '../../component/Utility/CoverPages'
import BlogItems from '../../component/Blog/BlogItems'
import BlogSidebar from './../../component/Blog/BlogSidebar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Blog() {
  return (
    <Box>
        <CoverPages title='Our blog' text='Blog Articles' />

        <Box padding={'100px 0'}>
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={8}>
                        <BlogItems />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <BlogSidebar />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Box display={'flex'} alignItems={'center'} marginTop={3}>
                        <Typography variant='body' className='num-page' marginRight={1} color={"#FFF"} fontSize={16} bgcolor={"#223a66"} borderRadius={'50%'} height={50} width={50} display={'flex'} alignItems={'center'} justifyContent={'center'} fontWeight={600}>1</Typography>
                        <Typography variant='body' className='num-page' marginRight={1} color={"#222"} fontSize={16} bgcolor={"#eee"} borderRadius={'50%'} height={50} width={50} display={'flex'} alignItems={'center'} justifyContent={'center'} fontWeight={600}>2</Typography>
                        <Typography variant='body' className='num-page' marginRight={1} color={"#222"} fontSize={16} bgcolor={"#eee"} borderRadius={'50%'} height={50} width={50} display={'flex'} alignItems={'center'} justifyContent={'center'} fontWeight={600}>3</Typography>
                        <Typography variant='body' className='num-page' color={"#222"} bgcolor={"#eee"} borderRadius={'50%'} height={50} width={50} display={'flex'} alignItems={'center'} justifyContent={'center'}><KeyboardArrowRightIcon fontSize='small' sx={{color:"#6F8BA4"}} /></Typography>
                    </Box>
                </Grid>
            </Container>
        </Box>
    </Box>
  )
}

export default Blog
