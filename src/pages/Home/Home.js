import React from 'react'
import { Box, Container } from '@mui/material';
import HomeCover from '../../component/Home/HomeCover'
import HomeFeature from '../../component/Home/HomeFeature'
import HomeAbout from './../../component/Home/HomeAbout';
import CounterComponent from '../../component/Home/CounterComponent';
import TitlePages from './../../component/Utility/TitlePages';
import AwardComponent from '../../component/Home/AwardComponent';
import BookAppoinment from '../../component/Home/BookAppoinment';
import SupportUs from '../../component/Home/SupportUs';
import ServedOver from '../../component/Home/ServedOver';

function Home() {
  return (
    <div>
      <HomeCover />
      <Container>
        <HomeFeature />
        <HomeAbout />
      </Container>
      <Box paddingBottom={'100px'} bgcolor={'#f4f9fc'} marginTop={'100px'}>
          <Container>
            <CounterComponent />
            <TitlePages 
              title='Award winning patient care' 
              desc='Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.' 
              width='60%' 
            />
            <AwardComponent />
          </Container>
      </Box>
      <BookAppoinment />
      <ServedOver />
      <SupportUs />
    </div>
  )
}

export default Home
