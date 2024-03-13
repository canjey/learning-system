import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/material";
import Featured from "./Featured";
import Categories from "./Categories";

import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Tutor from "./Tutor";

export default function LandingPage(){

    return(
        <>
            {/* <ThemeProvider theme={darkTheme}> */}
            <Header />
              <Box sx={{marginLeft: {md:'5%', xs:'8%' }, paddingRight: {md:'5%', xs:'10%'}}}>
                <Welcome />
                <Featured />
                <Categories/>
                <Testimonials />
                
              </Box>
              <Box sx={{backgroundColor:'#fdfbf5'}}>
              <Tutor/>

              </Box>
              
              <Box sx={{backgroundColor:'#f4f4f4'}}>              
              <Footer />
              </Box>
        {/* </ThemeProvider> */}
        
        </>
    )
}