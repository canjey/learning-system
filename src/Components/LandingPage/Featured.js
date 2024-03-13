import React from "react";
import Marketing from "../../assets/images/images.jpeg"
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Support from "../../assets/images/Support.jpg";
import MarketingImage from "../../assets/images/Marketing.jpg";
import Java from "../../assets/images/java.jpeg";
import DataProtection from "../../assets/images/Protection.jpg";
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




function PortfolioCard(props) {
  return (
    <Grid item xs={12} sm={6} lg={3} xl={3} spacing={4}>
      {console.log(props)}
      <Card sx={{ padding:'10px',borderRadius:'8px', 
                  height: '380px', paddingBottom: '20px',
                  ':hover': {
                    boxShadow: 10, 
                  }
                  }}>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt="green iguana"
          sx={{borderRadius:'8px'}}
        />              
        <CardContent sx={{textAlign:'left', display:"Grid", }}>
          <Typography variant="p">
            {props.school}
          </Typography>
          <Typography variant="h6" sx={{fontSize:'18px', }}>
            {props.name}
          </Typography>
          <Typography sx={{display:'flex', color:"#449be6", marginTop:'100px', position:'absolute'}}>
          <Typography variant="p" href="#" >
            Start Course
          </Typography>
          <ArrowForwardIcon />

          </Typography>
          
          <Typography variant="p" sx={{marginTop:'120px', position:'absolute', color:"#737474"}}>
            Degree
          </Typography>
        </CardContent>
        
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Featured() {
  const featuredCourses = [{
    id: 1,
    school:'University of illinois',
    name: "Data Protection",
    rating: 4.5,
    image: `${DataProtection}`
  },
  {
    id: 2,
    school:'University of Colorado',
    name: "Masters of Business Administration",
    rating: 4.5,
    image: `${Support}`
  },
  {
    id: 3,
    school:'University of illinois',
    name: "Masters of Science in Data Science",
    rating: 4.5,
    image: `${MarketingImage}`
  },
  {
    id: 4,
    school:'University of Colorado',
    name: "Masters of Science in Acountancy (iMSA)",
    rating: 4.5,
    image: `${Marketing}`
  },
  {
    id: 5,
    school:'University of illinois',
    name: "Masters of Science in Computer Science",
    rating: 4.5,
    image: `${Java}`
  },
  {
    id: 6,
    school:'University of Colorado',
    name: "Bachelor of Information Technology",
    rating: 4.5,
    image: `${Marketing}`
  },
  {
    id: 7,
    school:'University of illinois',
    name: "Master if Information Technology",
    rating: 4.5,
    image: `${Support}`
  },
  {
    id: 8,
    school:'University of Colorado',
    name: "IT Support",
    rating: 4.5,
    image: `${MarketingImage}`
  },
  ]
  return (
    <>
      <Grid container>
        <Grid item sx={{display:"block", marginLeft:'1px'}}>
          <Grid item sx={{display:'flex'}}>
          <Typography variant="h5">
            Featured 
          </Typography>
          <Typography variant="h5" sx={{color:'#FFCC00', marginLeft:'10px'}}>
            Products
          </Typography>
          </Grid>          
            <Divider orientation="horizontal" color="#FFCC00" sx={{width:'50%'}}/>
          </Grid>
        <Grid container spacing={2} sx={{marginTop:'20px', }}>
          {featuredCourses.map((product) => (
            <PortfolioCard
              key={product.id}
              school={product.school}
              name={product.name}
              Description={product.Description}
              image={product.image}
            />
          ))}
        </Grid>

      </Grid>
    </>
  )
}