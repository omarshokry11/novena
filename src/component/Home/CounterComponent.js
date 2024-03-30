import React, {  useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function CounterComponent() {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    const counterNumbers = [
        {id: 1, num: '58'},
        {id: 2, num: '700'},
        {id: 3, num: '40'},
        {id: 4, num: '20'},
    ]

    return (
        <Box position={'relative'} top={-110} overflow={'hidden'} color={'#FFF'} padding={'50px 0'}>
            <Box position={'absolute'} top={0} right={0} bottom={0} left={0} zIndex={1}>
                <img src="/images/counter.jpg" alt="img-counter" width={'100%'} height={'100%'} style={{objectFit:'cover'}} />
            </Box>

            <Box position={'absolute'} top={0} bgcolor={'rgba(34, 58, 102, 0.95)'} right={0} bottom={0} left={0} zIndex={1}></Box>
            <Box zIndex={100} position={'relative'}>
                <Grid container spacing={4} textAlign={'center'}>
                {counterNumbers.map((count)=> <Grid item xs={12} md={3} key={count.id}>
                        <Box fontSize={70} fontWeight={700}>
                            <CountUp  start={viewPortEntered ? null : 0} end={count.num}>
                                {({ countUpRef }) => {
                                    return (
                                    <ReactVisibilitySensor
                                        active={!viewPortEntered}
                                        onChange={(isVisible) => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                        }}
                                        delayedCall
                                    >
                                        <Typography variant="bod" ref={countUpRef}/>
                                    </ReactVisibilitySensor>
                                    );
                                }}
                            </CountUp>
                            <Typography fontSize={16} fontWeight={600} variant="body" marginLeft={'1px'} color={'#6F8BA4'}>k</Typography>
                            <Typography fontSize={16} fontWeight={600} variant="body2" marginLeft={'1px'} color={'#6F8BA4'}>Happy People</Typography>
                        </Box>
                    </Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}

export default CounterComponent
