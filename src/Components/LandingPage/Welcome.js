import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Education from '../../assets/images/Education.gif'
import  '../../assets/css/style.css';
import Button from '@mui/material/Button';
import GoogleButton from 'react-google-button'


export default function Welcome(){
    return(
        <>
        <Box>
            <Grid container>
                <Grid item md={6} sx={{marginTop:"30px", display:"block"}}>
                    <Typography variant="h4" sx={{marginTop:"20px"}}>
                    Welcome to Solidaridad <br/>
                    Online Learning System
                    </Typography>
                    <Typography  sx={{marginTop:"30px", width:'80%'}}>
                    Want to take your career to a step further? Our platform provides a comprehensive solution for learning, knowledge sharing, and professional development. 
                    </Typography>
                    <Grid sx={{marginTop:"10%", display:'flex'}}>
                    <Button variant="contained" sx={{borderRadius:"30px"}}>Explore Courses</Button>
                    <GoogleButton style={{borderRadius: '30px', backgroundColor: '#FFCC00', color:"black", marginLeft:'20px'}} />
                     
                                        </Grid>


                </Grid>
                <Grid item md={4} sx={{marginLeft: {xs:'100px'}}}>
                    <img src={Education} alt="Education" className="education-container"/>
                </Grid>
            </Grid>

        </Box>
        </>
    )
}