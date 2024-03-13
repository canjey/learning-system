import React from "react";
import Grid from '@mui/material/Grid';
import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';



const pages1 = ['About', 'What We offer', 'Leadership', 'Careers', 'Catalog'];
const secondRow = ['Professional certifications', 'MasterTrack Certifications', 'Degrees', 'Plus Certifications']
const community = ["Learners", "Partners", "Testers", "Teaching Center", "Translators"];
const quick = ['Privacy Policy', 'Terms of Use', 'contacts', 'Help', 'Investors', 'Press', 'Articles']

export default function Footer() {
    return (
        <>
            <Box>
                <Grid container sx={{ padding: '3%' }}>
                    <Grid item md={3} xs={12} >
                        <img src={logo} />
                        {pages1.map((links) => (
                            <Typography sx={{ marginTop: '8px', paddingLeft: '20px' }}>
                                {links}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item md={3} xs={12}>
                    <Typography variant="h6" sx={{ marginTop: '10px', marginBottom: '32px', marginLeft: '40px' }}>Certifications</Typography>
                        {secondRow.map((links) => (
                            <Typography sx={{ marginTop: '10px', paddingLeft: '40px' }}>
                                {links}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item md={2} xs={12}>
                    <Typography variant="h6" sx={{ marginTop: '10px', marginBottom: '32px', marginLeft: '40px' }}> Community</Typography>
                        {community.map((links) => (
                            <Typography sx={{ marginTop: '10px', paddingLeft: '40px' }}>
                                {links}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item md={2} xs={12}>
                    <Typography variant="h6" sx={{ marginTop: '10px', marginBottom: '32px', marginLeft: '40px' }}>Quick Links</Typography>
                        {quick.map((links) => (
                            <Typography sx={{ marginTop: '10px', paddingLeft: '40px' }}>
                                {links}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <Typography variant="h6" sx={{ marginTop: '10px', marginBottom: '32px', marginLeft: '40px' }}> Social Media</Typography>
                        <Grid sx={{ paddingLeft: '40px' }}>
                            <FacebookIcon />
                            <InstagramIcon />
                            <XIcon />
                            <YouTubeIcon />

                        </Grid>


                    </Grid>
                </Grid>
            </Box>
        </>
    )
}