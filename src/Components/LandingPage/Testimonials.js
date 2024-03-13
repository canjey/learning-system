import React from "react";
import Marketing from "../../assets/images/images.jpeg"
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Student from "../../assets/images/student.jpg";
import Divider from '@mui/material/Divider';
import Man from '../../assets/images/guy.jpg';
import Lady from '../../assets/images/lady.jpg';
import Guy from '../../assets/images/guy2.jpg';





function PortfolioCard(props) {
    return (
        <Grid item xs={12} sm={6} lg={3} md={3} xl={3} spacing={4} rowSpacing={2} sx={{marginBottom:'60px'}}>
            <img src={props.image} style={{ width: '200px', height: '200px', borderRadius: '300px' }} />
            <Typography variant="h6">
                {props.name}
            </Typography>
            <Typography variant="p" color="GrayText">
                {props.country}
            </Typography>
            <Divider orientation="horizontal" color="#FFCC00"   sx={{width:'20%', marginTop:'10px', marginBottom:'30px'}}/>
            <Typography>
                "{props.testimony}"
            </Typography>
        </Grid>
    );
}

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Gillian',
            country: 'Kenya',
            image: `${Student}`,
            statement: " If you invest in your education and build your skills, you will see major growth in your career. Just a few months after I began investing in myself, my life has changed in the best way. I've already applied what I've learned to my job, and I'm seeing tangible results."
        },
        {
            id: 2,
            name: 'David R.',
            country: 'Kenya',
            image: `${Guy}`,
            statement: " Online studies have completely transformed the way I approach learning. With traditional classes, I often felt restricted by the curriculum and teaching style. However, through platforms like Solidaridad, I have the freedom to explore topics that truly interest me and delve deeper into areas I'm passionate about"
        },
        {
            id: 3,
            name: 'John D.',
            image: `${Man}`,
            country: 'Uganda',
            statement: "I've been utilizing online studies through Solidaridad for a few months now, and I can't recommend it enough. The flexibility to learn at my own pace has been invaluable, especially with a busy work schedule. The course content is top-notch, and the ability to interact with instructors and peers virtually adds a whole new dimension to learning. "
        },
        {
            id: 3,
            name: 'Emily T.',
            country: 'Kenya',
            image: `${Lady}`,
            statement: " Transitioning to a new career can be daunting, but online studies have been my saving grace throughout this process. With the support of Solidaridad, I've been able to acquire the skills and knowledge necessary to make a successful career change. "
        }
    ]
    return (
        <>
            <Grid container sx={{ marginTop: '5%', marginBottom:'100px', }}>
            <Grid item sx={{display:"block", marginLeft:'1px'}}>
          <Grid item sx={{display:'flex'}}>
          <Typography variant="h5">
            From The 
          </Typography>
          <Typography variant="h5" sx={{color:'#FFCC00', marginLeft:'10px'}}>
            Community
          </Typography>
          </Grid>          
            <Divider orientation="horizontal" color="#FFCC00" sx={{width:'50%'}}/>
          </Grid>
                <Grid container spacing={4} sx={{ marginTop: '20px', marginBottom:'30px', paddingLeft:'20px', textAlign:'left' }}>
                    {testimonials.map((product) => (
                        <PortfolioCard
                            key={product.id}
                            country={product.country}
                            name={product.name}
                            testimony={product.statement}
                            image={product.image}
                        />
                    ))}
                </Grid>

            </Grid>
        </>
    )
}