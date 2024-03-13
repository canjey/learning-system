import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/material";
import Featured from "./Featured";
import Categories from "./Categories";
import { motion } from "framer-motion";
import { fadeIn } from "../variant"
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Tutor from "./Tutor";

export default function LandingPage() {

  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <Header />
      <Box sx={{ marginLeft: { md: '5%', xs: '8%' }, paddingRight: { md: '5%', xs: '10%' } }}>
        <Welcome />
        <Box sx={{ marginTop: "-30px" }}>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Featured />

          </motion.div>

        </Box>

        <Categories />
        <Box>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Testimonials />

          </motion.div>

        </Box>

      </Box>
      <Box sx={{ backgroundColor: '#fdfbf5', marginTop: '-40px' }}>
        <Tutor />

      </Box>

      <Box sx={{ backgroundColor: '#f4f4f4' }}>
        <Footer />
      </Box>
      {/* </ThemeProvider> */}

    </>
  )
}