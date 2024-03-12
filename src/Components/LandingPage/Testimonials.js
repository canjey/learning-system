import React from "react";
import Marketing from "../../assets/images/images.jpeg"
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Student from "../../assets/images/student.jpg"




function PortfolioCard(props) {
    return (
        <Grid item xs={12} sm={6} lg={3} md={1} xl={3} spacing={4}>
            <img src={Student} style={{ width: '50%', height: '50%', borderRadius: '300px' }} />
            <Typography variant="h6">
                {props.name}
            </Typography>
            <Typography>
                {props.country}
            </Typography>
            <Typography>
                {props.testimony}
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
            statement: ' If you invest in your education and build your skills, you will see major growth in your career. Just a few months after I began investing in myself, my life has changed in the best way.'
        },
        {
            id: 2,
            name: 'Gillian',
            country: 'Kenya',
            statement: ' If you invest in your education and build your skills, you will see major growth in your career. Just a few months after I began investing in myself, my life has changed in the best way.'
        },
        {
            id: 3,
            name: 'Gillian',
            country: 'Kenya',
            statement: ' If you invest in your education and build your skills, you will see major growth in your career. Just a few months after I began investing in myself, my life has changed in the best way.'
        },
        {
            id: 3,
            name: 'Gillian',
            country: 'Kenya',
            statement: ' If you invest in your education and build your skills, you will see major growth in your career. Just a few months after I began investing in myself, my life has changed in the best way.'
        }
    ]
    return (
        <>
            <Grid container sx={{ marginTop: '5%', marginBottom:'100px', }}>
                <Grid item sx={{ display: "flex", marginLeft: '1px',  }}>
                    <Typography variant="h5">
                        From The
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#FFCC00', marginLeft: '10px' }}>
                        Community
                    </Typography>
                </Grid>
                <Grid container spacing={4} sx={{ marginTop: '20px',  paddingLeft:'30px', textAlign:'center' }}>
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