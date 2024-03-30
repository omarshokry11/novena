import React from 'react'
import { Box } from '@mui/material'
import CoverPages from '../../component/Utility/CoverPages'
import ContactItem from '../../component/Contact/ContactItem'
import ContactUs from '../../component/Contact/ContactUs'

function Contact() {
  return (
    <Box>
      <CoverPages title='Contact Us' text='Get In Touch' />
      <ContactItem />
      <ContactUs />
    </Box>
  )
}

export default Contact
