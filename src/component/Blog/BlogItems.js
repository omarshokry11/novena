import React from 'react'
import { Box, Typography } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function BlogItems() {
    const blogItems =[
        {id:1, img:"/images/blog/blog-1.jpg", title:"Choose quality service over cheap service all type of things"},
        {id:2, img:"/images/blog/blog-2.jpg", title:"All test cost 25% in always in our laboratory"},
        {id:3, img:"/images/blog/blog-4.jpg", title:"Get Free consulation from our special surgeon and doctors"},
    ]

  return (
    <>
    {blogItems.map((item)=> 
        <Box key={item.id} marginBottom={7}>
            <Box>
                <img src={item.img} alt='img-blog' width={'100%'} />
            </Box>

            <Box margin={'1.25rem 0'} color={'#6c757d'} fontSize={15} display={'flex'} alignItems={'center'}>
                <Typography variant='body' display={'flex'} alignItems={'center'} marginRight={'1rem'}><CommentIcon sx={{fontSize:"16px", marginRight:"7px"}} /> 5 Comments</Typography>
                <Typography variant='body' display={'flex'} alignItems={'center'}><CalendarMonthIcon sx={{fontSize:"16px", marginRight:"7px"}} /> 28th January</Typography>
            </Box>

            <Box>
                <Typography className='footer-text' color={'#222'} variant='h2' fontSize={{xs:30, md:38}} fontWeight={600}>
                    {item.title}
                </Typography>
                <Typography variant='body2' lineHeight={'30px'} margin={'1.25rem 0'} fontSize={16} color={'#6F8BA4'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore 
                    atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.
                </Typography>
                <button className='submit-btn' style={{borderRadius:"50px", padding:"8px 35px", fontSize:"15px", fontWeight:"600", display:"flex", alignItems:"center"}}>READ MORE <KeyboardArrowRightIcon sx={{borderLeft:"1px solid rgba(255, 255, 255, 0.09)", marginLeft:"15px", paddingLeft:"15px", fontSize:"35px"}} /></button>
            </Box>
        </Box>)}
    </>
  )
}

export default BlogItems
