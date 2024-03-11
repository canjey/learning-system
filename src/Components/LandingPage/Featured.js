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

function PortfolioCard(props) {
  return (
    <Grid item xs={12} sm={6} lg={3} xl={3}>
      {console.log(props)}
      <Card sx={{ width: "95%", height: '250px', marginBottom: '20px' }}>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt="green iguana"
        />              <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {props.name}
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
    name: "Digital Marketing",
    rating: 4.5,
    image: `${Marketing}`
  },
  {
    id: 2,
    name: "IT Support",
    rating: 4.5,
    image: `${Support}`
  },
  {
    id: 3,
    name: "Marketing",
    rating: 4.5,
    image: `${MarketingImage}`
  },
  {
    id: 4,
    name: "Digital Marketing",
    rating: 4.5,
    image: `${Marketing}`
  },
  {
    id: 5,
    name: "Java",
    rating: 4.5,
    image: `${Java}`
  },
  {
    id: 6,
    name: "Digital Marketing",
    rating: 4.5,
    image: `${Marketing}`
  },
  {
    id: 7,
    name: "IT Support",
    rating: 4.5,
    image: `${Support}`
  },
  {
    id: 8,
    name: "IT Support",
    rating: 4.5,
    image: `${MarketingImage}`
  },
  ]
  return (
    <>
      <Grid container sx={{ marginTop: '5%' }}>
        <Grid item sx={{display:"flex", marginLeft:'1px'}}>
          <Typography variant="h5">
            Featured 
          </Typography>
          <Typography variant="h5" sx={{color:'#FFCC00', marginLeft:'10px'}}>
            Products
          </Typography>
        </Grid>
        <Grid container sx={{marginTop:'20px'}}>
          {featuredCourses.map((product) => (
            <PortfolioCard
              key={product.id}
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