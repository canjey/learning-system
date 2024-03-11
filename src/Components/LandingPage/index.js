import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";


export default function LandingPage(){
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary:{
            light:'#fffff',
            main:'#FFCC00',
          },
          typography: {
            fontFamily: 'poppins',
          },
         
      
        },
      });
    return(
        <>
            <ThemeProvider theme={darkTheme}>
            <Header />
              <Box sx={{paddingLeft: {md:'10%', xs:'10%' }}}>
                <Welcome />
              </Box>
        </ThemeProvider>
        
        </>
    )
}