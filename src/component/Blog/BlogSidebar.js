import React from 'react'
import { Box, Typography } from '@mui/material'

function BlogSidebar() {
    const posts =[
        {id:1, history:"03 Mar 2018", title:"Thoughtful living in los Angeles"},
        {id:2, history:"03 Mar 2018", title:"Vivamus molestie gravida turpis."},
        {id:3, history:"03 Mar 2018", title:"Fusce lobortis lorem at ipsum semper sagittis"},
    ]

    const tags = [
        {id:1, title:"DOCTORS"},
        {id:2, title:"AGENCY"},
        {id:3, title:"COMPANY"},
        {id:4, title:"MEDICINE"},
        {id:5, title:"SURGERY"},
        {id:6, title:"MARKETING"},
        {id:7, title:"SOCIAL MEDIA"},
        {id:8, title:"BRANDING"},
        {id:9, title:"LABORATORY"},
    ]

    const timeSchedule = [
        {id:1, day: "Monday - Friday", oclock:"9:00 - 17:00"},
        {id:2, day: "Saturday", oclock:"9:00 - 16:00"},
        {id:3, day: "Sunday", oclock:"Closed"},
    ]

    return (
        <>
            <Box marginBottom={8}>
                <Typography variant='h5' paddingBottom={'15px'} fontSize={'1.25rem'} fontWeight={600}>Search Here</Typography>
                <Typography variant='body2' marginBottom={'30px'} width={35} height={3} bgcolor="#e12454"></Typography>
                <input type="text" placeholder='search' style={{width:"100%", color:"#495057", height:"45px", outline:"none", fontSize:"14px", padding:"0 10px", borderRadius:"8px", border:"1px solid #ccc"}} />
            </Box>

            <Box marginBottom={8}>
                <Typography variant='h5' paddingBottom={'15px'} fontSize={'1.25rem'} fontWeight={600}>Popular Posts</Typography>
                <Typography variant='body2' marginBottom={'30px'} width={35} height={3} bgcolor="#e12454"></Typography>

                {posts.map((post)=> <Box marginBottom={3} key={post.id}>
                    <Typography variant='body2' fontSize={14} color={'#6F8BA4'}>{post.history}</Typography>
                    <Typography className='footer-text' variant='h6' margin={'.5rem 0'} fontSize={'1rem'} fontWeight={600} color={'#222'}>{post.title}</Typography>
                </Box>)}
            </Box>

            <Box marginBottom={8}>
                <Typography variant='h5' paddingBottom={'15px'} fontSize={'1.25rem'} fontWeight={600}>Categories</Typography>
                <Typography variant='body2' marginBottom={'30px'} width={35} height={3} bgcolor="#e12454"></Typography>
                
                <Box>
                    <Typography variant='body2' className='category-text' sx={{cursor:"pointer"}} color={'#222'} marginBottom={'10px'} fontSize={15}>Medicine <Typography marginLeft={1} variant='body' color={'#6F8BA4'}>(15)</Typography></Typography>
                    <Typography variant='body2' className='category-text' sx={{cursor:"pointer"}} color={'#222'} marginBottom={'10px'} fontSize={15}>Equipments <Typography marginLeft={1} variant='body' color={'#6F8BA4'}>(2)</Typography></Typography>
                    <Typography variant='body2' className='category-text' sx={{cursor:"pointer"}} color={'#222'} marginBottom={'10px'} fontSize={15}>Heart <Typography marginLeft={1} variant='body' color={'#6F8BA4'}>(10)</Typography></Typography>
                    <Typography variant='body2' className='category-text' sx={{cursor:"pointer"}} color={'#222'} marginBottom={'10px'} fontSize={15}>Free  counselling <Typography marginLeft={1} variant='body' color={'#6F8BA4'}>(5)</Typography></Typography>
                    <Typography variant='body2' className='category-text' sx={{cursor:"pointer"}} color={'#222'} marginBottom={'10px'} fontSize={15}>Lab test <Typography marginLeft={1} variant='body' color={'#6F8BA4'}>(5)</Typography></Typography>
                </Box>
            </Box>

            <Box marginBottom={8}>
                <Typography variant='h5' paddingBottom={'15px'} fontSize={'1.25rem'} fontWeight={600}>Tags</Typography>
                <Typography variant='body2' marginBottom={'30px'} width={35} height={3} bgcolor="#e12454"></Typography>
                
                <Box>
                    {tags.map((tag)=> <Typography className='tag-text' variant='body' key={tag.id} borderRadius={'50px'} bgcolor={'#eff0f3'} color={'#666'} fontSize={12} fontWeight={500} letterSpacing={'.075em'} margin={'0 7px 10px 0'} textAlign={'center'} padding={{xs:"0 20px", md:'0 25px'}} height={'41px'} lineHeight={'41px'} display={'inline-block'}>{tag.title}</Typography>)}
               </Box>
            </Box>

            <Box bgcolor={'#f4f9fc'} padding={'25px'}>
                <Typography variant='h5' paddingBottom={'15px'} fontSize={'1.25rem'} fontWeight={600}>Time Schedule</Typography>
                <Typography variant='body2' marginBottom={'30px'} width={35} height={3} bgcolor="#e12454"></Typography>
                
                {timeSchedule.map((time)=> <Box key={time.id} display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid #eee'} padding={'10px 0'}>
                    <Typography variant='body2' className='footer-text' color={'#222'} fontWeight={400} fontSize={16}>{time.day}</Typography>
                    <Typography variant='body2' color={'#6F8BA4'} fontWeight={400} fontSize={16}>{time.oclock}</Typography>
                </Box>)}

                <Typography variant='body2' marginTop={4} marginBottom={0.4} fontWeight={400} color={'#6F8BA4'} fontSize={16}>Need Urgent Help?</Typography>
                <Typography variant='h2' color={'#222'} fontSize={{xs:'1.25rem', md:'1.5rem'}} fontWeight={700}>+23-4565-65768</Typography>
            </Box>
        </>
    )
}

export default BlogSidebar
