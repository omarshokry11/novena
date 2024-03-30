import React from 'react'
import { Box, Typography ,Container} from '@mui/material'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TitlePages from '../Utility/TitlePages'

function ServedOver() {
    const items = [
        {id:1, img:"/images/doctors/1.jpg", name:"John Partho", title:"Amazing service!", desc:"They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."},
        {id:2, img:"/images/doctors/2.jpg", name:"Mullar Sarth", title:"Expert doctors!!", desc:"They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."},
        {id:3, img:"/images/doctors/3.jpg", name:"Kolis Mullar", title:"Good Support!!", desc:"They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."},
        {id:4, img:"/images/doctors/4.jpg", name:"Partho Sarothi", title:"Nice Environment!", desc:"They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."},
        {id:5, img:"/images/doctors/5.jpg", name:"Mullar Sarth", title:"Modern Service!!", desc:"They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."},
        {id:6, img:"/images/doctors/6.jpg", name:"Kolis Mullar", title:"Nice Environment!", desc:"They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."},
    ]

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 2},
    };

    return (
        <Box padding={'100px 0'} bgcolor={'#f4f9fc'}>
            <Container>
                <TitlePages
                title='We served over 5000+ Patients'
                desc='Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.' 
                width='60%' 
                />
                
                <AliceCarousel
                autoPlay
                activeIndex={0}
                infinite={true}
                responsive={responsive}
                autoPlayInterval={1000}
                fadeOutAnimation={false}
                dotsDisabled={true}
                touchTrackingEnabled={true}
                mouseTrackingEnabled={true}
            >
                {items.map((item)=> <Box key={item.id} padding={'30px'} bgcolor={'#FFF'} margin={'0 4px'}>
                    <Box display={'flex'} alignItems={'center'} marginBottom={'1.5rem'}>
                        <Box flex={1}>
                            <img src={item.img} alt='doctor-img' width={'75px'} height={'75px'} style={{overflow:"hidden", borderRadius:"50%", border:"5px solid #eff0f3"}} />
                        </Box>
                        <Box flex={5} marginLeft={1.5}>
                            <Typography variant='h4' fontSize={'1.25rem'} lineHeight={'35px'} fontWeight={700}>{item.title}</Typography>
                            <Typography variant='body' fontSize={16} color={'#6F8BA4'}>{item.name}</Typography>
                        </Box>
                    </Box>

                    <Typography variant='body2' fontSize={17} fontWeight={400} lineHeight={'30px'} color={'#6F8BA4'}>{item.desc}</Typography>
                </Box>)}
            </AliceCarousel>
            </Container>
        </Box>
    )
}

export default ServedOver
