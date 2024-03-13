import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Education from '../../assets/images/Education.gif'
import '../../assets/css/style.css';
import Button from '@mui/material/Button';
import GoogleButton from 'react-google-button'
import { motion } from "framer-motion";
import { fadeIn } from "../variant"

export default function Welcome() {
    return (
        <>
            <Box>
                <Grid container>
                    <Grid item md={6} xs={12} sx={{ marginTop: "30px", display: "block" }}>
                        <Typography variant="h4" sx={{ marginTop: "20px" }}>
                            Welcome to Solidaridad <br />
                            Online Learning System
                        </Typography>
                        <Typography sx={{ marginTop: "30px", width: '100%' }}>
                            Want to take your career to a step further? Our platform provides a comprehensive solution for learning, knowledge sharing, and professional development.
                        </Typography>
                        <Typography sx={{ marginTop: "30px", width: '100%' }}>
                            With a comprehensive suite of features, Solidaridad is your one-stop destination for all your learning and knowledge sharing needs.                    </Typography>

                        <Grid container sx={{ marginTop: "10%", display: 'flex' }}>
                            <Grid item md={6} xs={6}>
                            <Button variant="contained" xs={12} sx={{ borderRadius: "30px" }}>Explore Courses</Button>
                            </Grid>
                            <Grid item md={6} xs={6}>
                            <GoogleButton style={{ borderRadius: '30px', backgroundColor: '#ffffff', color: "black", }} />
                            </Grid>

                        </Grid>


                    </Grid>
                    <motion.Grid
                        variants={fadeIn("right", 0.7)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        item md={2} xs={12}
                        sx={{ marginLeft: { xs: '10px', md: '30px' }, width: { xs: "150%" } }}>
                        <img src={Education} alt="Education" className="education-container" style={{ width: '100%',  marginLeft:'5%' }} />
                    </motion.Grid>
                </Grid>

            </Box>
        </>
    )
}