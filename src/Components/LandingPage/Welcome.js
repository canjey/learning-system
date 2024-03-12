import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Education from '../../assets/images/Education.gif'
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
                    <Typography  sx={{marginTop:"30px", width:'80%'}}>
                    Want to take your career to a step further? Our platform provides a comprehensive solution for learning, knowledge sharing, and professional development. 
                    </Typography>
                    <Grid sx={{marginTop:"10%"}}>
                    <Button variant="contained" sx={{borderRadius:"30px"}}>Explore Courses</Button>
                    <Button variant="contained" sx={{marginLeft:"20%", borderRadius:"30px"}}>Sign in With SSO</Button>
                    </Grid>


                </Grid>
                <Grid item md={4} sx={{marginLeft: {xs:'100px'}}}>
                    <img src={Education} alt="Education" className="education-container"/>
                </Grid>
            </Grid>
            {/* <Grid container sx={{marginTop:"20px"}}>
                <Grid item md={4} xs={4}>
                    <Typography variant="h4">
                        Our
                    </Typography>
                    <Typography variant="h4" sx={{color:"#FFCC00"}}>
                        Achievement
                    </Typography>
                </Grid >
                <Grid  sx={{display:'flex'}}>
                <Grid item md={4.0} xs={2.5}>
                    <Typography variant="h4">
                        10K+
                    </Typography>
                    <Typography variant="p">
                        Total Students
                    </Typography>
                </Grid>
                <Grid item md={4.0} xs={2.5}>
                <Typography variant="h4">
                        20K+
                    </Typography>
                    <Typography variant="p">
                        Total Courses
                    </Typography>
                </Grid>
                <Grid item md={4.0} xs={2.5}>
                <Typography variant="h4">
                        2K
                    </Typography>
                    <Typography variant="p">
                        Certified Tutor
                    </Typography>
                </Grid>
                <Grid item md={4.0} xs={2.5}>
                <Typography variant="h4">
                        5K
                    </Typography>
                    <Typography variant="p">
                        Certified Tutor
                    </Typography>
                </Grid>
            </Grid>
            </Grid> */}
        </Box>
        </>
    )
}