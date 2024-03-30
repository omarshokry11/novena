import React from 'react'
import { Box, Container} from '@mui/material'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TitlePages from '../Utility/TitlePages'

import "../../Style/BlockStyle.scss"

function SupportUs() {
    const items = [
        {id:1, img:"/images/award/1.png"},
        {id:2, img:"/images/award/2.png"},
        {id:3, img:"/images/award/3.png"},
        {id:4, img:"/images/award/4.png"},
        {id:5, img:"/images/award/5.png"},
        {id:6, img:"/images/award/6.png"},
    ]

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 3},
        1024: {items: 6},
    };

    return (
        <Box paddingTop={'100px'} paddingBottom={'50px'}>
            <Container>
                <Box marginBottom={2}>
                    <TitlePages
                    title='Partners who support us'
                    desc='Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.' 
                    width='60%' 
                    />
                </Box>
                
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
                {items.map((item)=> <Box key={item.id} width={{xs: "55%", sm:"70%"}} margin={'0 auto'}>
                        <img src={item.img} alt='doctor-img' width={'100%'} style={{margin: "0 auto"}} />
                    </Box>)}
            </AliceCarousel>
            </Container>
        </Box>
    )
}

export default SupportUs
