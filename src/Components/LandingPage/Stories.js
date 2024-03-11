import { Typography } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import student from '../../assets/images/student.jpg';

export default function Success(){
    return(
        <>
        <Grid container>
                <Typography variant="h5">
                    Celebrating
                </Typography>
                <Typography variant="h5" sx={{color:"#FFCC00", marginLeft:'10px'}}>
                    Success Stories
                </Typography>
            </Grid>
        <Grid container columnSpacing={1} sx={{marginTop:'10px'}}>
            
            <Grid item md={5}>
                <img src={student} alt="Student" style={{width:'100%'}}/>
            </Grid>
            <Grid item md={6} sx={{marginTop:'10px', width:'80%'}}>
                <Typography variant="p">
                Meet our star learner! Discover their inspiring stories and learn how Solidaridad has helped them achieve their goals. Be motivated and join our growing community of passionate learners.

                <br/>
                Mitchelle graduated her undergrad with a First Class. Solidaridad offered her a platform to strive and reach her highs

                </Typography>
            </Grid>
        </Grid>
        </>
    )
}