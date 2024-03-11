import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import "../../assets/css/style.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function Header(){
  const pages = ['Home', 'Features', 'Downloads', 'Support', 'Login'];
  const [isShow, setIsShow] = React.useState(false);
  const handleOpenMenu = () => {
    setIsShow(!isShow);
  }


  return (
    <>
    <Box sx={{backgroundColor:"#222121", marginTop:"-20px"}}>
      <Grid container sx={{paddingTop:"20px"}}>
        <Grid item xs={2} sx={{display: {md:'none', xs:'flex' }, marginLeft:'100px', marginTop:'25px'}}>
          <DehazeIcon onClick={handleOpenMenu}/>
          <Grid item sx={{ display: isShow ? 'block' : 'none' }}>
          {pages.map((page) => (
            <Button variant="text"><Typography textAlign="center" sx={{fontSize:'15px'}}>{page}</Typography></Button>
          ))}
            <Button variant='text'>SignUp</Button>

          </Grid>

        </Grid>
        <Grid item md={6} sm={5}>
          <img src={Logo} alt="logo" className='logo-container'/>
        </Grid>
        <Grid item md ={6} sm={5} spacing={5} sx={{paddingTop:"20px", display:{md:'flex',xs:'none'}}}>
          {pages.map((page) => (
            <Button variant="text"><Typography textAlign="center" sx={{fontSize:'15px'}}>{page}</Typography></Button>
          ))}
            <Button variant='text' sx={{marginLeft:'40px'}}>SignUp</Button>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}
