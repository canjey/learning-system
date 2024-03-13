import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Marketing from "../../assets/images/images.jpeg"
import IT from "../../assets/images/IT.jpeg";
import Graphics from "../../assets/images/graphic.jpg"
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


function CategoriesCard(props) {
  return (
    <>
      <Grid item xs={12} sm={6} lg={3} xl={3}>
        <Card sx={{ width: "100%", height: '100px', marginBottom: '20px', display:'flex', ':hover': {
                    boxShadow: 5, 
                  } }}>
          <CardMedia
            component="img"
            image={props.image}
            alt="green iguana"
            sx={{width:'50%', }}
            
          />              
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.number} courses
            </Typography>
          </CardContent> 
         
        </Card>

      </Grid>
    </>
  )
}

export default function Categories() {
  const featuredCourses = [{
    id: 1,
    image: `${Marketing}`,
    name:"Marketing",
    number: 300 
  },
  {
    id: 2,
    image: `${IT}`,
    name:'IT',
    number: 322,
  },
  {
    id: 3,
    image: `${Graphics}`,
    name:'Graphics',
    number: 456,
  },
  {
    id: 4,
    name:'Business',
    image: `${Marketing}`,
    number:656
  },
  {
    id: 4,
    name:'Arts and Humanities',
    image: `${IT}`,
    number:656
  },
  {
    id: 4,
    name:'Personal Development',
    image: `${Graphics}`,
    number:656
  },
  {
    id: 4,
    name: 'Social Sciences',
    image: `${Marketing}`,
    number:656
  },
  {
    id: 4,
    name:'Language Learning',
    image: `${Graphics}`,
    number:656
  },
  

  ]
  return (
    <>
      <Grid container sx={{marginTop:'80px'}}>
      <Grid item sx={{display:"block", marginLeft:'1px'}}>
        <Grid item sx= {{display:'flex'}}>
        <Typography variant="h5">
            Courses
          </Typography>
          <Typography variant="h5" sx={{color:'#FFCC00', marginLeft:'10px'}}>
            Categories
          </Typography>
        </Grid>
        <Divider orientation="horizontal" color="#FFCC00" sx={{width:'50%'}}/>
        </Grid>

        <Grid container rowSpacing={1} spacing={2} sx={{marginTop:'10px',}}>
          {featuredCourses.map((product) => (
            <CategoriesCard
              key={product.id}
              name={product.name}
              number={product.number}
              image={product.image}
            />
          ))}
        </Grid>
      </Grid>
    </>
  )
}