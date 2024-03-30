import React from 'react'
import { Box, Container } from '@mui/material'
import CoverPages from '../../component/Utility/CoverPages'
import DepartmentItems from '../../component/Department/DepartmentItems'
import TitlePages from '../../component/Utility/TitlePages'

function Department() {
    return (
        <Box>
            <CoverPages title='All Department' text='Care Department' />

            <Box padding={'100px 0'}>
                <Container>
                    <TitlePages 
                        width='60%'
                        title="Award winning patient care" 
                        desc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat." 
                    />

                    <DepartmentItems />
                </Container>
            </Box>
        </Box>
    )
}

export default Department
