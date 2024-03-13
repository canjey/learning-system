import { Typography } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import Tutor1 from '../../assets/images/Tutor1.jpg';
import Tutor2 from "../../assets/images/Tutor2.jpg"
import Tutor3 from "../../assets/images/Tutor 3.jpg"
import Button from '@mui/material/Button';

export default function Tutor(){
    return (
        <>
        <Grid container columnSpacing={1} sx={{paddingLeft:'50px', backgroundColor:'' }}>
            <Grid item md={4} xs={12} sx={{padding:'20px', width:'60%'}} >
                <img src={Tutor1} style={{width:'100%', }}/>
            </Grid>
            <Grid item md={6} sx={{marginTop:'30px'}} >
                <Typography variant="h5">
                    Become a Tutor?
                </Typography>
                <Typography variant ="h6">
                    Reach learners looking for world-class options
                </Typography>
                <Typography >
                    Solidaridad opens up new possibilities for your content on one of the world’s largest online education platforms
                </Typography>
                <Button variant = "contained" sx={{borderRadius:"30px", width:'200px', marginTop:'30px'}}>
                    Join Us
                </Button>
            </Grid>
        </Grid>
        </>
    )
}