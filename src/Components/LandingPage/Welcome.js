import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Education from '../../assets/images/Education (1).gif'
import  '../../assets/css/style.css';
import Button from '@mui/material/Button';


export default function Welcome(){
    return(
        <>
        <Box>
            <Grid container>
                <Grid item md={6} sx={{marginTop:"30px", display:"block"}}>
                    <Typography variant="h4" sx={{marginTop:"50px"}}>
                    Welcome to Solidaridad <br/>
                    Online Learning System
                    </Typography>
                    <Typography  sx={{marginTop:"30px", width:'80%', fontFamily:"inherit"}}>
                    Want to take your career to a step further? Our platform provides a comprehensive solution for learning, knowledge sharing, and professional development. 
                    </Typography>
                    <Grid sx={{marginTop:"10%"}}>
                    <Button variant="contained" sx={{borderRadius:"30px"}}>Explore Courses</Button>
                    <Button variant="contained" sx={{marginLeft:"20%", borderRadius:"30px"}}>Sign in With SSO</Button>
                    </Grid>


                </Grid>
                <Grid item md={4} sx={{marginLeft: {xs:'100px'}}}>
                    <img src={Education} className="education-container"/>
                </Grid>
            </Grid>
            <Grid container sx={{marginTop:"20px"}}>
                <Grid item md={4} xs={4}>
                    <Typography variant="h4">
                        Our
                    </Typography>
                    <Typography variant="h4" sx={{color:"#FFCC00"}}>
                        Achievement
                    </Typography>
                </Grid >
                <Grid  sx={{display:'flex'}}>
                <Grid item md={2.0} xs={2.5}>
                    <Typography variant="h6">
                        10K+
                    </Typography>
                    <Typography>
                        Total Students
                    </Typography>
                </Grid>
                <Grid item md={2.0} xs={2.5}>
                <Typography variant="h6">
                        20K+
                    </Typography>
                    <Typography>
                        Total Courses
                    </Typography>
                </Grid>
                <Grid item md={2.0} xs={2.5}>
                <Typography variant="h6">
                        2K
                    </Typography>
                    <Typography>
                        Certified Tutor
                    </Typography>
                </Grid>
                <Grid item md={2.0} xs={2.5}>
                <Typography variant="h6">
                        5K
                    </Typography>
                    <Typography>
                        Certified Tutor
                    </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Box>
        </>
    )
}