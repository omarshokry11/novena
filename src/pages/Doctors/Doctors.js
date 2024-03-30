import React from 'react'
import { Box, Container } from '@mui/material'
import CoverPages from '../../component/Utility/CoverPages'
import Banner from '../../component/Utility/Banner';
import DoctorsItems from '../../component/Doctors/DoctorsItems';
import TitlePages from '../../component/Utility/TitlePages';

function Doctors() {
    return (
        <Box>
            <CoverPages title='All Doctors' text='Specalized Doctors' />

            <Box padding={'100px 0'}>
                <TitlePages 
                    width='30%'
                    title='Doctors' 
                    desc='We provide a wide range of creative services adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque' 
                />
                <Container>
                    <DoctorsItems />
                </Container>
            </Box>
            <Banner />
        </Box>
    )
}

export default Doctors
