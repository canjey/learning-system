import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/material";
import Featured from "./Featured";
import Categories from "./Categories";
import Success from "./Stories";


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
              <Box sx={{paddingLeft: {md:'5%', xs:'10%' }, paddingRight: {md:'5%', xs:'10%'}}}>
                <Welcome />
                <Featured />
                <Categories/>
                <Success />
              </Box>
        </ThemeProvider>
        
        </>
    )
}