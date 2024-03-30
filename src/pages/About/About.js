import React from 'react'
import { Box, Container } from "@mui/material";
import CoverPages from '../../component/Utility/CoverPages';
import AboutItems from '../../component/About/AboutItems';
import FeatureAbout from '../../component/About/FeatureAbout';
import AwardsAbout from '../../component/About/AwardsAbout';
import TeamAbout from '../../component/About/TeamAbout';

function About() {
  return (
    <Box>
      <CoverPages title='About Us' text='About Us' />

        <Container>
            <AboutItems />

            <FeatureAbout />

            <AwardsAbout />

            <TeamAbout />

      </Container>
    </Box>
  )
}

export default About
