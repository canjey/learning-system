import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Marketing from "../../assets/images/images.jpeg"
import IT from "../../assets/images/IT.jpeg";
import Graphics from "../../assets/images/graphic.jpg"


function CategoriesCard(props) {
  return (
    <>
      <Grid item xs={12} sm={6} lg={3} xl={3}>
        <Card sx={{ width: "95%", height: '200px', marginBottom: '20px' }}>
          <CardMedia
            component="img"
            height="200"
            image={props.image}
            alt="green iguana"
          />              
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.Description}
            </Typography>
          </CardContent> */}
          {/* <CardActions>
            <Button size="small">Share</Button> */}
            {/* <Button size="small">Learn More</Button> */}
          {/* </CardActions> */}
        </Card>

      </Grid>
    </>
  )
}

export default function Categories() {
  const featuredCourses = [{
    id: 1,
    image: `${Marketing}`
  },
  {
    id: 2,
    image: `${IT}`
  },
  {
    id: 3,
    image: `${Graphics}`
  },
  {
    id: 4,
    image: `${Marketing}`
  },

  ]
  return (
    <>
      <Grid container sx={{marginTop:'20px'}}>
        <Grid item sx={{display:'flex'}}>
          <Typography variant="h5">
            Courses 
          </Typography>
          <Typography variant="h5" sx={{color: "#FFCC00", marginLeft:'10px'}}>
             Categories
          </Typography>
          
        </Grid>
        <Grid container sx={{marginTop:'10px'}}>
          {featuredCourses.map((product) => (
            <CategoriesCard
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