import React, { useState } from 'react'
import { Box } from '@mui/material'
import DoctorCard from './DoctorCard';

function DoctorsItems() {
    const [checked, setChecked] = useState("All Department");

    const buttons = [
        {id: 1, btnName:"Cardiology"},
        {id: 2, btnName:"Dental"},
        {id: 3, btnName:"Neurology"},
        {id: 4, btnName:"Medicine"},
        {id: 5, btnName:"Pediatric"},
        {id: 6, btnName:"Traumatology"},
    ]

    return (
        <Box>
            <Box width={"85%"} margin={'0 auto'} textAlign={'center'} marginBottom={3}>
            <button className={checked === 'All Department' ? "active" : "btn-style"} onClick={() => setChecked('All Department')}>{'All Department'}</button>
                {buttons.map((btn)=> <button key={btn.id} className={checked === btn.btnName ? "active" : "btn-style"} onClick={() => setChecked(btn.btnName)}>{btn.btnName}</button>)}
            </Box>

            {checked === 'All Department' && <DoctorCard all="All Department" /> }

            {buttons.map((item)=> <Box key={item.id}>
                {checked === item.btnName && <DoctorCard specialization={item.btnName} /> }
                </Box>)}
        </Box>
    )
}

export default DoctorsItems
